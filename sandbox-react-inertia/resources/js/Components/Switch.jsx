export default function Switch({}) {

  return (
    <div class="flex items-center">
      <label class="relative cursor-pointer">
        <input type="checkbox" class="sr-only peer" />
        <div class="w-11 h-6 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007bff]">
        </div>
      </label>
    </div>
  );
}
