import Link from "next/link";
import { FileText } from "lucide-react";

export default function FavoritesPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-150px)] bg-[#111827] text-white !px-4 !py-20">
      <div className="flex flex-col items-center !max-w-sm text-center">
        <FileText className="w-16 h-16 text-gray-300 !mb-6" strokeWidth={1.5} />
        <h1 className="text-2xl font-bold !mb-4">No favorites yet</h1>
        <p className="text-gray-400 !mb-8">
          Start adding products to your favorites by clicking the heart icon!
        </p>
        <Link
          href="/"
          className="!px-6 !py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium rounded-md transition-colors"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}
