import React from "react";
import { Truck } from "lucide-react";

interface Shipment {
  id: string;
  origin: string;
  destination: string;
  weight: string;
  time: string;
}

interface ShipmentsListProps {
  shipments: Shipment[];
}

const ShipmentsList: React.FC<ShipmentsListProps> = ({ shipments }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Active Shipments</h2>
      <div className="space-y-3">
        {shipments.map((shipment) => (
          <div
            key={shipment.id}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium text-sm">Batch ID: {shipment.id}</p>
                <p className="text-xs text-gray-500">
                  Origin: {shipment.origin}, Destination: {shipment.destination}
                </p>
                <p className="text-xs text-gray-600">{shipment.weight}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400">{shipment.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentsList;
