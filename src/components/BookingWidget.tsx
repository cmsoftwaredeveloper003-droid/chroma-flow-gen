import { Calendar, Users } from "lucide-react";

const BookingWidget = () => {
  return (
    <div className="booking-widget flex items-center rounded-sm shadow-2xl">
      <div className="flex items-center gap-3 px-6 py-4 min-w-[240px]">
        <Calendar className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
            Check In - Check Out
          </p>
          <p className="text-sm font-medium mt-0.5">Select Dates</p>
        </div>
      </div>

      <div className="booking-divider w-px h-12 self-center" />

      <div className="flex items-center gap-3 px-6 py-4 min-w-[180px]">
        <Users className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
            Guests
          </p>
          <p className="text-sm font-medium mt-0.5">2 Adults</p>
        </div>
      </div>

      <button className="btn-book h-full px-8 py-4 ml-2 text-sm">
        Book Now
      </button>
    </div>
  );
};

export default BookingWidget;
