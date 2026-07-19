interface TimeSlotProps {
  hour: number;
  occupied: boolean;
  onClick?: () => void;
}

export default function TimeSlot({ hour, occupied, onClick }: TimeSlotProps) {
  return (
    <button
      type="button"
      disabled={occupied}
      onClick={onClick}
      className={`
        flex h-12 w-16 items-center justify-center rounded-xl text-sm font-semibold transition
        ${
          occupied
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : "cursor-pointer bg-orange-500 text-white hover:bg-orange-600"
        }
      `}
    >
      {hour}:00
    </button>
  );
}
