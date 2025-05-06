"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Menu, Plus, Edit2, Trash2, Globe, Globe2 } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

// Mock data for libraries
const mockLibraries = [
  {
    id: 1,
    name: "Family Photos",
    thumbnail: "https://picsum.photos/400/300",
    isPublished: true,
  },
  {
    id: 2,
    name: "Vacation 2024",
    thumbnail: "https://picsum.photos/400/301",
    isPublished: false,
  },
];

export default function HomePage() {
  const router = useRouter();
  const [libraries, setLibraries] = useState(mockLibraries);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [libraryToDelete, setLibraryToDelete] = useState<number | null>(null);

  const handleDeleteLibrary = (libraryId: number) => {
    setLibraryToDelete(libraryId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (libraryToDelete) {
      setLibraries(libraries.filter((lib) => lib.id !== libraryToDelete));
      setDeleteDialogOpen(false);
      setLibraryToDelete(null);
    }
  };

  const togglePublish = (libraryId: number) => {
    setLibraries(
      libraries.map((lib) =>
        lib.id === libraryId ? { ...lib, isPublished: !lib.isPublished } : lib
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/home" className="flex items-center">
                <span className="text-xl font-bold text-gray-900">Lamhat</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-4">
              <Link href="/home">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link href="/profile">
                <Button variant="ghost">Profile</Button>
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/home">Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Library Cards */}
          {libraries.map((library) => (
            <MagicCard
              key={library.id}
              className="p-0 overflow-hidden"
              gradientFrom="#4F46E5"
              gradientTo="#7C3AED"
            >
              <div className="aspect-video relative">
                <img
                  src={library.thumbnail}
                  alt={library.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">{library.name}</h3>
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => router.push(`/gallery/${library.id}`)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteLibrary(library.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => togglePublish(library.id)}
                  >
                    {library.isPublished ? (
                      <Globe className="h-4 w-4 text-green-500" />
                    ) : (
                      <Globe2 className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>
            </MagicCard>
          ))}

          {/* Add Library Card */}
          <MagicCard
            className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer"
            onClick={() => router.push("/gallery")}
            gradientFrom="#10B981"
            gradientTo="#3B82F6"
          >
            <div className="flex flex-col items-center justify-center h-full min-h-[200px]">
              <Plus className="h-12 w-12 text-gray-400" />
              <p className="mt-2 text-gray-600">Add New Library</p>
            </div>
          </MagicCard>
        </div>
      </main>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Library</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this library? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}