import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import { storageService } from '../../../shared/lib/storageService';
import { brandAssets } from '../../../shared/data/siteContent';

export const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password) {
      setError('Username dan password wajib diisi.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const success = storageService.adminLogin(username, password);
      setLoading(false);

      if (success) {
        navigate('/admin/dashboard');
      } else {
        setError('Username atau password tidak valid. (Default: admin / admin123)');
      }
    }, 300);
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <img src={brandAssets.logo} alt="Kitogizi" className="admin-brand-logo" />
          <h2>Admin Portal Kitogizi</h2>
          <p>Masuk untuk mengelola data rekapitulasi Nutrition Check pengguna.</p>
        </div>

        {error && <div className="admin-alert-error">{error}</div>}

        <form onSubmit={handleLogin} className="admin-login-form">
          <div className="admin-input-group">
            <label htmlFor="admin-user">Username Admin</label>
            <div className="input-with-icon">
              <PersonRoundedIcon className="input-icon" />
              <input
                id="admin-user"
                type="text"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
          </div>

          <div className="admin-input-group">
            <label htmlFor="admin-pass">Password</label>
            <div className="input-with-icon">
              <LockRoundedIcon className="input-icon" />
              <input
                id="admin-pass"
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
          </div>

          <button type="submit" className="admin-submit-btn" disabled={loading}>
            <SecurityRoundedIcon />
            {loading ? 'Memverifikasi...' : 'Masuk ke Dashboard'}
          </button>
        </form>

        <div className="admin-login-footer">
          <p>Sistem Rekapitulasi Data Kitogizi &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
