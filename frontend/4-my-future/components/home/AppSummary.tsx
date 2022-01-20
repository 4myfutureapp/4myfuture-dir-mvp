import React from "react";
import User from "../../models/User";
import Proposal from "../../models/Proposal";
import Payments from "../../models/Payment";

interface AppSummaryProps {
  proposals?: Proposal[];
  payments?: Payments[];
  users?: User[];
}

function AppSummary({ proposals, payments, users }: AppSummaryProps) {
  return (
    <div className="w-full text-3xl font-sans border-b-2 ">
      {proposals && payments && users ? (
        <div className="w-full flex justify-between">
          <div>
            Proposals Registered:{" "}
            <span className="font-bold">{proposals.length}</span>
          </div>
          <div>
            Total Payments: <span className="font-bold">{payments.length}</span>
          </div>
          <div>
            Users Registered: <span className="font-bold">{users.length}</span>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-between">
          <div className="animate-pulse">
            Proposals Registered:
          </div>
          <div  className="animate-pulse">
            Total Payments:
          </div>
          <div  className="animate-pulse">
            Users Registered:
          </div>
        </div>
      )}
    </div>
  );
}

export default AppSummary;
