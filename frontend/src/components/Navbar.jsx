import React from 'react';
import { Feather, PlusCircle } from 'lucide-react';

const Navbar = ({ onAddClick }) => {
    return (
        <nav className="glass fixed top-0 left-0 right-0 z-50 py-4 px-8 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg">
                    <Feather className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold font-heading gradient-text tracking-tight">ModernBlog</span>
            </div>

            <div>
                <button
                    onClick={onAddClick}
                    className="btn btn-primary flex items-center gap-2"
                >
                    <PlusCircle size={20} />
                    <span>New Post</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
