export default function ActionBoard({ actions }: { actions: string[] }) {
  return (
    <div className="mt-4 p-4 bg-white rounded shadow">
      <h3 className="font-bold mb-2">📊 Bảng hành động trong tuần</h3>
      <ul className="list-disc pl-5">
        {actions.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}
