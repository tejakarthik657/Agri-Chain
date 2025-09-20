// import React from "react";
// import { Play, ShoppingCart, User, Search } from "lucide-react";

// export default function ProductJourney() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Top Navbar */}
//       <header className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
//         <h1 className="text-xl font-bold text-[#1c2536]">FreshHarvest</h1>
//         <nav className="flex gap-6 text-gray-700 font-medium">
//           <a href="#" className="hover:text-[#1c2536]">Our Products</a>
//           <a href="#" className="hover:text-[#1c2536]">Our Farms</a>
//           <a href="#" className="hover:text-[#1c2536]">Our Story</a>
//           <a href="#" className="hover:text-[#1c2536]">Trace</a>
//         </nav>
//         <div className="flex gap-4 text-gray-600">
//           <Search className="w-5 h-5 cursor-pointer hover:text-[#1c2536]" />
//           <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#1c2536]" />
//           <User className="w-5 h-5 cursor-pointer hover:text-[#1c2536]" />
//         </div>
//       </header>

//       <main className="max-w-4xl mx-auto p-6 space-y-10">
//         {/* Hero Product Card */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
//             alt="Tomatoes"
//             className="w-full h-60 object-cover"
//           />
//           <div className="p-6 space-y-5">
//             <p className="text-gray-700">
//               We believe in transparency. Follow your organic tomatoes from our
//               farm to your table, ensuring quality and freshness every step of
//               the way.
//             </p>

//             {/* Blockchain Badge */}
//             <div className="flex items-center gap-2 text-sm">
//               <span className="px-2 py-1 rounded-md bg-green-100 text-green-700 font-semibold">
//                 ✅ Blockchain Verified
//               </span>
//               <span className="text-gray-500">100% Transparent · Aug 16, 2024</span>
//             </div>

//             {/* Timeline */}
//             <div className="border-l-2 border-gray-200 pl-4 space-y-6 mt-6">
//               <div>
//                 <p className="font-semibold text-[#1c2536]">🌱 Harvested at Farm</p>
//                 <p className="text-gray-600 text-sm">
//                   Farm: Green Acres, Salinas, CA. Date: Aug 16, 2024.
//                   Produce: Organic Tomatoes (Heirloom).
//                 </p>
//               </div>
//               <div>
//                 <p className="font-semibold text-[#1c2536]">🚚 Transported to Store</p>
//                 <p className="text-gray-600 text-sm">
//                   Truck ID: TRK-4567. Temp: 40°F. Date: Aug 16, 2024.
//                 </p>
//               </div>
//               <div>
//                 <p className="font-semibold text-[#1c2536]">🏪 Arrived at Store</p>
//                 <p className="text-gray-600 text-sm">
//                   Store: FreshHarvest Market, San Francisco, CA. Date: Aug 17, 2024.
//                 </p>
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-3 pt-4">
//               <button className="px-5 py-2 rounded-lg bg-[#1c2536] text-white text-sm font-medium hover:bg-[#0f1d3a]">
//                 Show Transparency
//               </button>
//               <button className="px-5 py-2 rounded-lg bg-gray-100 text-sm font-medium hover:bg-gray-200">
//                 Share Arrival
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Video / Related Journey */}
//         <div className="bg-white rounded-xl shadow overflow-hidden">
//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1607305387294-028e4e96bb33"
//               alt="Cucumbers"
//               className="w-full h-72 object-cover"
//             />
//             <button className="absolute inset-0 flex items-center justify-center">
//               <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center shadow-md">
//                 <Play className="w-6 h-6 text-gray-800" />
//               </div>
//             </button>
//           </div>
//           <div className="p-6">
//             <button className="px-5 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50">
//               Share Journey
//             </button>
//           </div>
//         </div>

//         {/* Related Products */}
//         <div>
//           <h2 className="text-lg font-semibold mb-4">Related Products</h2>
//           <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
//             <div className="p-3 border rounded-lg hover:shadow">
//               Organic Bell Peppers <br />
//               <span className="text-gray-500 text-xs">From Green Acres Farm</span>
//             </div>
//             <div className="p-3 border rounded-lg hover:shadow">
//               Organic Cucumbers <br />
//               <span className="text-gray-500 text-xs">From Green Acres Farm</span>
//             </div>
//             <div className="p-3 border rounded-lg hover:shadow">
//               Organic Lettuce <br />
//               <span className="text-gray-500 text-xs">From Green Acres Farm</span>
//             </div>
//           </div>
//         </div>

//         {/* Support + Blockchain */}
//         <div className="space-y-4 text-sm text-gray-700">
//           <p>
//             <strong>Customer Support</strong> <br />
//             Questions or feedback? Contact{" "}
//             <a href="mailto:support@freshharvest.com" className="text-blue-600 underline">
//               support@freshharvest.com
//             </a>
//           </p>
//           <div className="p-4 bg-gray-100 rounded-lg">
//             <strong>Blockchain Verification</strong> <br />
//             Batch ID: FH7854321 · Immutable record stored on secure blockchain.
//             <div className="mt-2 p-2 bg-white rounded text-xs font-mono">
//               Transaction:{" "}
//               <a href="#" className="text-blue-600 underline">
//                 0x2a4f...e97b
//               </a>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import React from "react";
import { Play, ShoppingCart, User, Search } from "lucide-react";

export default function ProductJourney() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navbar */}
      <header className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-[#1c2536]">FreshHarvest</h1>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-[#1c2536]">Our Products</a>
          <a href="#" className="hover:text-[#1c2536]">Our Farms</a>
          <a href="#" className="hover:text-[#1c2536]">Our Story</a>
          <a href="#" className="hover:text-[#1c2536]">Trace</a>
        </nav>
        <div className="flex gap-4 text-gray-600">
          <Search className="w-5 h-5 cursor-pointer hover:text-[#1c2536]" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#1c2536]" />
          <User className="w-5 h-5 cursor-pointer hover:text-[#1c2536]" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-10">
        {/* Hero Product Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg"
            alt="Tomatoes"
            className="w-full h-60 object-cover"
          />
          <div className="p-6 space-y-5">
            <p className="text-gray-700">
              We believe in transparency. Follow your organic tomatoes from our
              farm to your table, ensuring quality and freshness every step of
              the way.
            </p>

            {/* Blockchain Badge */}
            <div className="flex items-center gap-2 text-sm">
              <span className="px-2 py-1 rounded-md bg-green-100 text-green-700 font-semibold">
                ✅ Blockchain Verified
              </span>
              <span className="text-gray-500">100% Transparent · Aug 16, 2024</span>
            </div>

            {/* Timeline */}
            <div className="border-l-2 border-gray-200 pl-4 space-y-6 mt-6">
              <div>
                <p className="font-semibold text-[#1c2536]">🌱 Harvested at Farm</p>
                <p className="text-gray-600 text-sm">
                  Farm: Green Acres, Salinas, CA. Date: Aug 16, 2024.
                  Produce: Organic Tomatoes (Heirloom).
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#1c2536]">🚚 Transported to Store</p>
                <p className="text-gray-600 text-sm">
                  Truck ID: TRK-4567. Temp: 40°F. Date: Aug 16, 2024.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#1c2536]">🏪 Arrived at Store</p>
                <p className="text-gray-600 text-sm">
                  Store: FreshHarvest Market, San Francisco, CA. Date: Aug 17, 2024.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button className="px-5 py-2 rounded-lg bg-[#1c2536] text-white text-sm font-medium hover:bg-[#0f1d3a]">
                Show Transparency
              </button>
              <button className="px-5 py-2 rounded-lg bg-gray-100 text-sm font-medium hover:bg-gray-200">
                Share Arrival
              </button>
            </div>
          </div>
        </div>

        {/* Video / Related Journey */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="relative group">
            <img
              src="https://www.trustbasket.com/cdn/shop/articles/Carrot.jpg?v=1688378789"
              alt="Cucumbers"
              className="w-full h-72 object-cover group-hover:opacity-90 transition"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition">
                <Play className="w-7 h-7 text-gray-800" />
              </div>
            </button>
          </div>
          <div className="p-6 flex justify-between items-center">
            <h3 className="font-semibold text-gray-700">Carrot Journey</h3>
            <button className="px-5 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50">
              Share Journey
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="p-3 border rounded-lg hover:shadow">
              Organic Bell Peppers <br />
              <span className="text-gray-500 text-xs">From Green Acres Farm</span>
            </div>
            <div className="p-3 border rounded-lg hover:shadow">
              Organic Cucumbers <br />
              <span className="text-gray-500 text-xs">From Green Acres Farm</span>
            </div>
            <div className="p-3 border rounded-lg hover:shadow">
              Organic Lettuce <br />
              <span className="text-gray-500 text-xs">From Green Acres Farm</span>
            </div>
          </div>
        </div>

        {/* Support + Blockchain */}
        <div className="space-y-6">
          {/* Customer Support */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Customer Support</h3>
            <p className="text-sm text-gray-600">
              Questions or feedback? Contact us at{" "}
              <a
                href="mailto:support@freshharvest.com"
                className="text-gray-600 underline"
              >
                support@freshharvest.com
              </a>
            </p>
          </div>

          {/* Feedback */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-3">Feedback</h3>
            <p className="text-sm text-gray-600 mb-3">
              Was this information helpful?
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-[#1c2536] text-white text-sm font-medium hover:bg-[#0f1d3a]">
                Yes
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-sm font-medium hover:bg-gray-200">
                No
              </button>
            </div>
          </div>

          {/* Blockchain Verification */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Blockchain Verification</h3>
            <p className="text-sm text-gray-600">
              Batch ID: <span className="font-mono">FH7854321</span> · Immutable record stored on secure blockchain.
            </p>
            <div className="mt-3 p-3 bg-gray-100 rounded-lg text-xs font-mono text-gray-700">
              Transaction:{" "}
              <a href="#" className="text-gray-600 underline">
                0x2a4f...e97b
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
