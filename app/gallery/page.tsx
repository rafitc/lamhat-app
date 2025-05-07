"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Menu, Plus, Edit2, Trash2, Globe, Globe2, Save } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

// Mock data for photos
const mockPhotos = [
  {
    id: 1,
    url: "https://picsum.photos/400/300",
    caption: "Family Vacation 2024",
  },
  {
    id: 2,
    url: "https://picsum.photos/400/301",
    caption: "Beach Day",
  },
];

export default function GalleryPage() {
  const router = useRouter();
  const [galleryTitle, setGalleryTitle] = useState("My Gallery");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [photos, setPhotos] = useState(mockPhotos);
  const [isPublished, setIsPublished] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [photoToDelete, setPhotoToDelete] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGalleryTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    if (galleryTitle.trim() === "") {
      setGalleryTitle("My Gallery");
    }
    setIsEditingTitle(false);
  };

  const handleDeletePhoto = (photoId: number) => {
    setPhotoToDelete(photoId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (photoToDelete) {
      setPhotos(photos.filter((photo) => photo.id !== photoToDelete));
      setDeleteDialogOpen(false);
      setPhotoToDelete(null);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || photos.length >= 20) return;

    // Mock file upload - in real app, you'd upload to server
    const newPhotos = Array.from(files).map((file, index) => ({
      id: photos.length + index + 1,
      url: URL.createObjectURL(file),
      caption: file.name,
    }));

    setPhotos([...photos, ...newPhotos].slice(0, 20));
  };

  const handleSaveGallery = () => {
    // Mock API call to save gallery
    console.log("Saving gallery:", { galleryTitle, photos, isPublished });
  };

  const togglePublish = () => {
    setIsPublished(!isPublished);
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
        {/* Gallery Title */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {isEditingTitle ? (
              <Input
                value={galleryTitle}
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
                className="text-2xl font-bold"
                autoFocus
              />
            ) : (
              <h1 className="text-2xl font-bold">{galleryTitle}</h1>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditingTitle(true)}
            >
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={togglePublish}
            >
              {isPublished ? (
                <Globe className="h-4 w-4 text-green-500" />
              ) : (
                <Globe2 className="h-4 w-4 text-gray-500" />
              )}
            </Button>
            <Button onClick={handleSaveGallery}>
              <Save className="h-4 w-4 mr-2" />
              Save Gallery
            </Button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Photo Cards */}
          {photos.map((photo) => (
            <MagicCard
              key={photo.id}
              className="p-0 overflow-hidden"
              gradientFrom="#4F46E5"
              gradientTo="#7C3AED"
            >
              <div className="aspect-square relative group">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleDeletePhoto(photo.id)}
                  >
                    <Trash2 className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 truncate">{photo.caption}</p>
              </div>
            </MagicCard>
          ))}

          {/* Add Photo Card */}
          {photos.length < 20 && (
            <MagicCard
              className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
              gradientFrom="#10B981"
              gradientTo="#3B82F6"
            >
              <div className="flex flex-col items-center justify-center h-full min-h-[200px]">
                <Plus className="h-12 w-12 text-gray-400" />
                <p className="mt-2 text-gray-600">Add Photo</p>
                <p className="text-sm text-gray-500">
                  {20 - photos.length} slots remaining
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileUpload}
              />
            </MagicCard>
          )}
        </div>
      </main>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Photo</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this photo? This action cannot be
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
