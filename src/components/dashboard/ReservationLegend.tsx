export default function ReservationLegend() {
  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:justify-start sm:gap-8 sm:text-sm">
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-green-500" />
        Disponível
      </div>

      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-orange-500" />
        Em andamento
      </div>

      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        Encerrada
      </div>
    </div>
  );
}
