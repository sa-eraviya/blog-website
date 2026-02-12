import React from 'react';
import { X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { blogPostSchema, blogPostDefaults } from '../lib/schemas';

const BlogForm = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty },
    } = useForm({
        resolver: zodResolver(blogPostSchema),
        defaultValues: initialData || blogPostDefaults,
    });

    React.useEffect(() => {
        if (isOpen) {
            reset(initialData || blogPostDefaults);
        }
    }, [initialData, isOpen, reset]);

    const onFormSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            await onSubmit(data);
            reset(blogPostDefaults);
            onClose();
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="glass relative w-full max-w-lg p-8 rounded-3xl shadow-2xl border border-white/10 bg-[#16161a]"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold font-heading text-white">
                            {initialData ? 'Edit Post' : 'Create New Post'}
                        </h2>
                        <button
                            onClick={onClose}
                            disabled={isSubmitting}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="text-sm font-semibold text-slate-400 ml-1">
                                Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                placeholder="Enter a catchy title..."
                                disabled={isSubmitting}
                                className={`bg-white/5 border rounded-xl p-4 focus:outline-none focus:ring-2 focus:border transition-all text-white placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed
                                    ${errors.title
                                        ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500'
                                        : 'border-white/10 focus:ring-indigo-500/50 focus:border-indigo-500'
                                    }`}
                                {...register('title')}
                            />
                            {errors.title && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-sm text-red-400 ml-1"
                                >
                                    {errors.title.message}
                                </motion.p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="content" className="text-sm font-semibold text-slate-400 ml-1">
                                Content
                            </label>
                            <textarea
                                id="content"
                                rows={6}
                                placeholder="What's on your mind?"
                                disabled={isSubmitting}
                                className={`bg-white/5 border rounded-xl p-4 focus:outline-none focus:ring-2 focus:border transition-all text-white placeholder:text-slate-600 resize-none disabled:opacity-50 disabled:cursor-not-allowed
                                    ${errors.content
                                        ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500'
                                        : 'border-white/10 focus:ring-indigo-500/50 focus:border-indigo-500'
                                    }`}
                                {...register('content')}
                            />
                            {errors.content && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-sm text-red-400 ml-1"
                                >
                                    {errors.content.message}
                                </motion.p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || !isDirty}
                            className="btn btn-primary py-4 text-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    {initialData ? 'Updating...' : 'Publishing...'}
                                </>
                            ) : (
                                initialData ? 'Update Post' : 'Publish Post'
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BlogForm;
