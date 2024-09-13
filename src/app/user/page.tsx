import React from "react";
import Header from "./components/header"; // Adjust the path as necessary
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "../../components/ui/card";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* Page content goes here */}
        <div>
          <h1>This is</h1>
        </div>
        <div>
          <Card className="w-[350px] ">
            <CardHeader>
              <CardTitle>Your Gallery Name</CardTitle>
              <CardDescription>Gallery description</CardDescription>
            </CardHeader>
            <CardContent>No of photoo</CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
