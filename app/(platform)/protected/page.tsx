"use client";

import { UserButton } from "@clerk/nextjs";
const protectedPage = () => {
    return (
        <div>
        <UserButton />
        </div>
    );
    }
export default protectedPage;