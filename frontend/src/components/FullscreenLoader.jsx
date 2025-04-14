export default function FullScreenLoader() {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }
  