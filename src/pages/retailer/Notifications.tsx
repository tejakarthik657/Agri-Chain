import { useState, useEffect } from "react";
import NotificationItem from "../../components/retailercomp/Notifications/NotificationItem";
import NotificationFilter from "../../components/retailercomp/Notifications/NotificationFilter";
import NotificationSort from "../../components/retailercomp/Notifications/NotificationSort";
import NotificationActions from "../../components/retailercomp/Notifications/NotificationActions";
import NotificationPagination from "../../components/retailercomp/Notifications/NotificationPagination";

const pageSize = 4;

// Example retailer-specific notifications
const initialNotifications = [
  {
    id: 1,
    type: "order",
    title: "New Order Received",
    description: "Order #10234 has been placed by John Doe.",
    time: "1 hour ago",
    isRead: false,
    createdAt: "2025-09-20T10:00:00",
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Completed",
    description: "Payment for Order #10230 has been received successfully.",
    time: "2 hours ago",
    isRead: true,
    createdAt: "2025-09-20T09:00:00",
  },
  {
    id: 3,
    type: "stock",
    title: "Low Stock Alert",
    description: "Product 'Organic Apples' is running low. Only 5 units left.",
    time: "Yesterday",
    isRead: false,
    createdAt: "2025-09-19T18:30:00",
  },
  {
    id: 4,
    type: "return",
    title: "Return Requested",
    description: "Customer has requested a return for Order #10228.",
    time: "Today at 8:45 AM",
    isRead: true,
    createdAt: "2025-09-20T08:45:00",
  },
  {
    id: 5,
    type: "promotion",
    title: "New Promotion Available",
    description: "Get 15% off on bulk orders above $500.",
    time: "2 days ago",
    isRead: false,
    createdAt: "2025-09-18T15:00:00",
  },
  {
    id: 6,
    type: "shipment",
    title: "Shipment Dispatched",
    description: "Order #10227 has been dispatched and is on its way.",
    time: "2 days ago",
    isRead: true,
    createdAt: "2025-09-18T10:30:00",
  },
];

export default function RetailerNotifications({
  onUnreadCountChange,
}: {
  onUnreadCountChange?: (count: number) => void;
}) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Most Recent");
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  // Notify parent if provided
  useEffect(() => {
    if (onUnreadCountChange) {
      onUnreadCountChange(unreadCount);
    }
  }, [unreadCount, onUnreadCountChange]);

  // Filtering
  const filtered = notifications.filter((n) =>
    filter === "All" ? true : filter === "Unread" ? !n.isRead : n.isRead
  );

  // Sorting
  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "Most Recent"
      ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  // Pagination
  const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);
  const pageCount = Math.ceil(sorted.length / pageSize);

  // Reset page if data changes
  useEffect(() => {
    const maxPage = Math.ceil(sorted.length / pageSize);
    if (page > maxPage && maxPage > 0) {
      setPage(1);
    }
  }, [filter, sortOrder, notifications, page]);

  // Actions
  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    setPage(1);
  };

  const clearAll = () => {
    setNotifications([]);
    setPage(1);
  };

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    if (!expanded[id] && !notifications.find((n) => n.id === id)?.isRead) {
      markAsRead(id);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pageCount) {
      setPage(newPage);
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Retailer Notifications
      </h2>
      <p className="text-gray-500 mb-6">
        Stay updated on orders, payments, inventory, and promotions.
      </p>

      <NotificationFilter filter={filter} setFilter={setFilter} />
      <div className="mt-6">
        <NotificationSort sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-4">
        {paginated.length === 0 && (
          <p className="text-center text-gray-400 p-6">No notifications.</p>
        )}
        {paginated.map((n) => (
          <NotificationItem
            key={n.id}
            notification={n}
            isExpanded={expanded[n.id] || false}
            toggleExpand={() => toggleExpand(n.id)}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        {pageCount > 1 && (
          <NotificationPagination
            currentPage={page}
            totalPages={pageCount}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      <NotificationActions markAllAsRead={markAllAsRead} clearAll={clearAll} />
    </div>
  );
}
