
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import AdminDashboard from '@/components/admin/AdminDashboard';
import Footer from '@/components/layout/Footer';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AdminDashboard />
      <Footer />
    </div>
  );
};

export default Admin;
