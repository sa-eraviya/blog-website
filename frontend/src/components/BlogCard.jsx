import React from 'react';
import { Trash2, Edit3, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogCard = ({ blog, onDelete, onEdit }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="glass p-6 rounded-2xl flex flex-col gap-4 group transition-all duration-300 hover:border-indigo-500/30"
        >
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors font-heading">
                    {blog.title}
                </h3>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={() => onEdit(blog)}
                        className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-indigo-400 transition-colors"
                        title="Edit"
                    >
                        <Edit3 size={18} />
                    </button>
                    <button
                        onClick={() => onDelete(blog.id)}
                        className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-red-400 transition-colors"
                        title="Delete"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            <p className="text-slate-400 line-clamp-3 mb-4 text-sm leading-relaxed">
                {blog.content}
            </p>

            <div className="mt-auto flex items-center text-xs text-slate-500 gap-2 font-medium">
                <Calendar size={14} className="text-indigo-500" />
                <span>Published Recently</span>
            </div>
        </motion.div>
    );
};

export default BlogCard;
