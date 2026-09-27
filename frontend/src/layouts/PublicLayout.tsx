import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function PublicLayout() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Header />

            <main className="pt-8">
                <Outlet />
            </main>
        </div>
    );
}

export default PublicLayout;