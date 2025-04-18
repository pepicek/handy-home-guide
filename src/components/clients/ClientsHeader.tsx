
import React from "react";
import { AddClientButton } from "@/components/clients/AddClientDialog";

export const ClientsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-anthracite">Client Management</h1>
      <AddClientButton />
    </div>
  );
};
