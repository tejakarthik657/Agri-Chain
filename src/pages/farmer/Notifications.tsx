import { useState, useEffect } from "react";
import NotificationItem from "../../components/farmer/farmer/Notifications/NotificationItem";
import NotificationFilter from "../../components/farmer/farmer/Notifications/NotificationFilter";
import NotificationSort from "../../components/farmer/farmer/Notifications/NotificationSort";
import NotificationActions from "../../components/farmer/farmer/Notifications/NotificationActions";
import NotificationPagination from "../../components/farmer/farmer/Notifications/NotificationPagination";

const pageSize = 4;

const initialNotifications = [
  { 
    id: 1, 
    type: "shipment", 
    title: "New Shipment Created", 
    description: "Batch ID 20231026-001 has been created and is awaiting pickup.", 
    time: "2 hours ago", 
    isRead: false, 
    createdAt: "2025-09-19T10:00:00" 
  },
  { 
    id: 2, 
    type: "pickup", 
    title: "Pickup Confirmed", 
    description: "Driver confirmed pickup for Batch ID 20231026-002.", 
    time: "3 hours ago", 
    isRead: true, 
    createdAt: "2025-09-19T09:00:00" 
  },
  { 
    id: 3, 
    type: "delivery", 
    title: "Delivery Completed", 
    description: "Batch ID 20231025-005 has been delivered to Metro Mart.", 
    time: "Yesterday", 
    isRead: false, 
    createdAt: "2025-09-18T18:30:00" 
  },
  { 
    id: 4, 
    type: "warehouse", 
    title: "Arrived at Warehouse", 
    description: "Batch ID 20231026-004 has arrived at Central Distribution Center.", 
    time: "Today at 9:15 AM", 
    isRead: true, 
    createdAt: "2025-09-19T09:15:00" 
  },
  { 
    id: 5, 
    type: "issue", 
    title: "Issue Reported", 
    description: "Batch ID 20231026-003 reported a delay due to vehicle breakdown.", 
    time: "5 hours ago", 
    isRead: false, 
    createdAt: "2025-09-19T07:30:00" 
  },
  { 
    id: 6, 
    type: "update", 
    title: "Route Updated", 
    description: "Batch ID 20231024-007 rerouted due to traffic congestion.", 
    time: "1 day ago", 
    isRead: false, 
    createdAt: "2025-09-18T14:45:00" 
  },
  { 
    id: 7, 
    type: "delivery", 
    title: "Delivery Scheduled", 
    description: "Batch ID 20231023-009 scheduled for delivery to City Market tomorrow.", 
    time: "2 days ago", 
    isRead: true, 
    createdAt: "2025-09-17T16:00:00" 
  },
  { 
    id: 8, 
    type: "shipment", 
    title: "New Shipment Created", 
    description: "Batch ID 20231027-010 has been created and assigned to driver.", 
    time: "2 days ago", 
    isRead: true, 
    createdAt: "2025-09-17T11:30:00" 
  },
  { 
    id: 9, 
    type: "warehouse", 
    title: "Stock Update", 
    description: "Warehouse received fresh produce: 1200 lbs Tomatoes from Farm Fresh.", 
    time: "3 days ago", 
    isRead: false, 
    createdAt: "2025-09-16T10:00:00" 
  },
  { 
    id: 10, 
    type: "alert", 
    title: "Cold Storage Alert", 
    description: "Temperature deviation detected in Truck #23 carrying Batch ID 20231022-006.", 
    time: "4 days ago", 
    isRead: true, 
    createdAt: "2025-09-15T08:45:00" 
  },
];

export default function LogisticsNotifications({
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

  useEffect(() => {
    if (onUnreadCountChange) {
      onUnreadCountChange(unreadCount);
    }
  }, [unreadCount, onUnreadCountChange]);

  const filtered = notifications.filter((n) =>
    filter === "All" ? true : filter === "Unread" ? !n.isRead : n.isRead
  );

  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "Most Recent"
      ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);
  const pageCount = Math.ceil(sorted.length / pageSize);

  useEffect(() => {
    const maxPage = Math.ceil(sorted.length / pageSize);
    if (page > maxPage && maxPage > 0) {
      setPage(1);
    }
  }, [filter, sortOrder, notifications, page]);

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
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Notifications</h2>
      <p className="text-gray-500 mb-6">
        Stay updated on all important logistics activities like shipments, pickups,
        deliveries, warehouse updates, and alerts.
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
