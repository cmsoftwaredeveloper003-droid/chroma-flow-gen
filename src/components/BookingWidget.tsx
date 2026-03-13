import { useState } from "react";
import { Calendar as CalendarIcon, Users } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BookingWidget = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [calendarMode, setCalendarMode] = useState<"checkin" | "checkout">("checkin");

  const handleDateSelect = (date: Date | undefined) => {
    if (calendarMode === "checkin") {
      setCheckIn(date);
      setCalendarMode("checkout");
    } else {
      setCheckOut(date);
    }
  };

  return (
    <div className="booking-widget flex flex-col sm:flex-row items-stretch sm:items-center rounded-sm shadow-2xl w-full max-w-2xl">
      {/* Date picker */}
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 sm:min-w-[240px] text-left hover:bg-muted/30 transition-colors">
            <CalendarIcon className="h-5 w-5 text-muted-foreground shrink-0" />
            <div>
              <p className="text-[10px] sm:text-xs font-medium tracking-wider uppercase text-muted-foreground">
                Check In - Check Out
              </p>
              <p className="text-xs sm:text-sm font-medium mt-0.5">
                {checkIn && checkOut
                  ? `${format(checkIn, "MMM d")} - ${format(checkOut, "MMM d")}`
                  : checkIn
                  ? `${format(checkIn, "MMM d")} - Select`
                  : "Select Dates"}
              </p>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-3 border-b">
            <div className="flex gap-2">
              <button
                onClick={() => setCalendarMode("checkin")}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  calendarMode === "checkin"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                Check In {checkIn && `· ${format(checkIn, "MMM d")}`}
              </button>
              <button
                onClick={() => setCalendarMode("checkout")}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  calendarMode === "checkout"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                Check Out {checkOut && `· ${format(checkOut, "MMM d")}`}
              </button>
            </div>
          </div>
          <Calendar
            mode="single"
            selected={calendarMode === "checkin" ? checkIn : checkOut}
            onSelect={handleDateSelect}
            disabled={(date) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              if (date < today) return true;
              if (calendarMode === "checkout" && checkIn && date <= checkIn) return true;
              return false;
            }}
            initialFocus
            className="p-3 pointer-events-auto"
          />
        </PopoverContent>
      </Popover>

      <div className="booking-divider hidden sm:block w-px h-12 self-center" />
      <div className="booking-divider sm:hidden h-px w-[90%] mx-auto" />

      {/* Guest selector */}
      <div className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 sm:min-w-[160px]">
        <Users className="h-5 w-5 text-muted-foreground shrink-0" />
        <div className="flex-1">
          <p className="text-[10px] sm:text-xs font-medium tracking-wider uppercase text-muted-foreground">
            Guests
          </p>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="border-0 p-0 h-auto text-xs sm:text-sm font-medium shadow-none focus:ring-0 bg-transparent">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Adult</SelectItem>
              <SelectItem value="2">2 Adults</SelectItem>
              <SelectItem value="3">3 Adults</SelectItem>
              <SelectItem value="4">4 Adults</SelectItem>
              <SelectItem value="5">5+ Adults</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <button className="btn-book px-8 sm:px-10 py-4 sm:py-5 sm:ml-auto text-xs sm:text-sm tracking-widest uppercase font-semibold">
        Book Now
      </button>
    </div>
  );
};

export default BookingWidget;
