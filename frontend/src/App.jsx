import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Trash2 } from 'lucide-react';
import Navbar from './components/Navbar';
import BlogCard from './components/BlogCard';
import BlogForm from './components/BlogForm';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { Toaster } from 'sonner';

const API_URL = 'http://localhost:8000';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${API_URL}/blogs`);
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleCreateOrUpdate = async (formData) => {
    try {
      if (editingBlog) {
        await axios.put(`${API_URL}/blogs/${editingBlog.id}`, formData);
        toast.success('Post updated successfully!');
      } else {
        await axios.post(`${API_URL}/blogs`, formData);
        toast.success('Post published successfully!');
      }
      await fetchBlogs();
      setEditingBlog(null);
    } catch (error) {
      console.error('Error saving blog:', error);
      toast.error(error.response?.data?.detail || 'Failed to save post. Please try again.');
      throw error;
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/blogs/${id}`);
      toast.success('Post deleted successfully!');
      await fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Failed to delete post. Please try again.');
    }
  };

  const confirmDelete = (id) => {
    toast('Are you sure you want to delete this post?', {
      description: 'This action cannot be undone.',
      action: {
        label: (
          <span className="flex items-center gap-1.5 text-sm font-semibold">
            <Trash2 size={14} />
            Delete
          </span>
        ),
        onClick: () => handleDelete(id),
      },
      cancel: {
        label: 'Cancel',
        onClick: () => { },
      },
      actionButtonStyle: {
        background: '#dc2626',
        color: 'white',
        borderRadius: '8px',
      },
      cancelButtonStyle: {
        background: 'rgba(255,255,255,0.05)',
        color: '#94a3b8',
        borderRadius: '8px',
      },
      duration: 10000,
    });
  };

  const openEditForm = (blog) => {
    setEditingBlog(blog);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c]">
      <Navbar onAddClick={() => { setEditingBlog(null); setIsFormOpen(true); }} />

      <main className="max-w-7xl mx-auto pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <section className="mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black mb-8 font-heading leading-tight tracking-tight text-white"
          >
            Share Your <br />
            <span className="gradient-text">Creative Thoughts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            A minimalist space for your ideas. Simple, fast, and elegant.
            Connect your FastAPI backend and start writing today.
          </motion.p>
        </section>

        {loading ? (
          <div className="flex justify-center p-20">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(99,102,241,0.2)]" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onDelete={confirmDelete}
                onEdit={openEditForm}
              />
            ))}

            {blogs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-24 text-center glass rounded-[2.5rem] border-dashed border-2 border-white/5"
              >
                <p className="text-slate-500 text-xl font-medium">No posts yet. Be the first to share your journey!</p>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="mt-6 text-indigo-400 hover:text-indigo-300 font-bold transition-colors"
                >
                  Write your first post →
                </button>
              </motion.div>
            )}
          </div>
        )}
      </main>

      <BlogForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleCreateOrUpdate}
        initialData={editingBlog}
      />

      <Footer />

      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={4000}
        toastOptions={{
          style: {
            background: '#16161a',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#f8fafc',
          },
        }}
      />
    </div>
  );
}

export default App;
