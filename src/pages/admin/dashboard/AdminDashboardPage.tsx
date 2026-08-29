import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import type { NutritionCheckResult } from '../../../shared/lib/nutritionCalculator';
import { storageService } from '../../../shared/lib/storageService';
import { createWhatsappHref } from '../../../shared/config/site';

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<NutritionCheckResult[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'score_high' | 'score_low'>('newest');
  const [selectedSubmission, setSelectedSubmission] = useState<NutritionCheckResult | null>(null);

  useEffect(() => {
    if (!storageService.isAdminAuthenticated()) {
      navigate('/admin/login', { replace: true });
      return;
    }
    loadSubmissions();
  }, [navigate]);

  const loadSubmissions = async () => {
    const data = await storageService.getAllSubmissionsAsync();
    setSubmissions(data);
  };

  const handleLogout = () => {
    storageService.adminLogout();
    navigate('/admin/login');
  };



  const handleExportCSV = () => {
    if (submissions.length === 0) return;

    const headers = [
      'ID',
      'Tanggal',
      'Nama',
      'No. WhatsApp',
      'BB (kg)',
      'TB (cm)',
      'IMT',
      'Kategori IMT',
      'Skor Total (%)',
      'Kategori Skor',
      'Domain Terendah',
      'Tantangan Terbesar',
      'Harapan / Target',
      'Persetujuan Privasi',
    ];

    const rows = submissions.map((sub) => [
      sub.id,
      new Date(sub.createdAt).toLocaleString('id-ID'),
      `"${sub.input.name.replace(/"/g, '""')}"`,
      `"${sub.input.whatsappNumber || '-'}"`,
      sub.input.weightKg,
      sub.input.heightCm,
      sub.bmi,
      `"${sub.bmiCategory}"`,
      `${sub.totalPercentage}%`,
      `"${sub.totalCategory}"`,
      `"${sub.lowestDomains.join(', ')}"`,
      `"${sub.input.biggestChallenge.replace(/"/g, '""')}"`,
      `"${sub.input.goal.replace(/"/g, '""')}"`,
      `"${sub.input.consentAgreed ? 'Disetujui' : 'Tidak'}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Rekap_Simulasi_Gizi_Kitogizi_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metrics calculation
  const totalSubmissions = submissions.length;
  const avgScore = totalSubmissions > 0 ? Math.round(submissions.reduce((acc, s) => acc + s.totalPercentage, 0) / totalSubmissions) : 0;
  
  // Category Breakdown
  const categoryCounts: Record<string, number> = {
    'Sangat baik': 0,
    Baik: 0,
    Cukup: 0,
    Kurang: 0,
  };
  submissions.forEach((s) => {
    if (categoryCounts[s.totalCategory] !== undefined) {
      categoryCounts[s.totalCategory]++;
    }
  });

  // Filter & Sort
  const filteredSubmissions = submissions
    .filter((sub) => {
      const matchSearch =
        sub.input.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sub.input.whatsappNumber && sub.input.whatsappNumber.includes(searchTerm)) ||
        sub.input.biggestChallenge.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.input.goal.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory = categoryFilter === 'all' || sub.totalCategory.toLowerCase().replace(/\s+/g, '-') === categoryFilter;

      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      if (sortBy === 'oldest') return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      if (sortBy === 'score_high') return b.totalPercentage - a.totalPercentage;
      if (sortBy === 'score_low') return a.totalPercentage - b.totalPercentage;
      return 0;
    });

  return (
    <div className="admin-dashboard-page">
      {/* Top Navbar */}
      <header className="admin-topbar">
        <div className="admin-topbar-inner">
          <div className="admin-brand">
            <AssessmentRoundedIcon className="admin-logo-icon" />
            <div>
              <span className="brand-title">Kitogizi Admin Portal</span>
              <span className="brand-sub">Rekapitulasi Simulasi & Self-Check Gizi</span>
            </div>
          </div>

          <div className="admin-user-actions">
            <button onClick={handleLogout} className="admin-logout-btn">
              <LogoutRoundedIcon /> Keluar Admin
            </button>
          </div>
        </div>
      </header>

      <main className="admin-main-content">
        <div className="container">
          {/* Summary Cards */}
          <div className="admin-metrics-grid">
            <div className="metric-card">
              <div className="metric-icon-bg icon-teal">
                <PeopleAltRoundedIcon />
              </div>
              <div className="metric-details">
                <span className="metric-label">Total Responden</span>
                <span className="metric-value">{totalSubmissions} User</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-bg icon-orange">
                <SpeedRoundedIcon />
              </div>
              <div className="metric-details">
                <span className="metric-label">Rata-rata Skor Gizi</span>
                <span className="metric-value">{avgScore}%</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon-bg icon-mint">
                <AssessmentRoundedIcon />
              </div>
              <div className="metric-details">
                <span className="metric-label">Kategori 'Kurang' / Needs Help</span>
                <span className="metric-value">{categoryCounts['Kurang'] || 0} User</span>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="admin-table-controls">
            <div className="search-filter-box">
              <div className="search-input-wrapper">
                <SearchRoundedIcon className="search-icon" />
                <input
                  type="text"
                  placeholder="Cari berdasarkan nama, tantangan, atau target..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="filter-select-wrapper">
                <FilterListRoundedIcon className="filter-icon" />
                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                  <option value="all">Semua Kategori</option>
                  <option value="sangat-baik">Sangat baik (&gt;85%)</option>
                  <option value="baik">Baik (75–85%)</option>
                  <option value="cukup">Cukup (65–75%)</option>
                  <option value="kurang">Kurang (&lt;65%)</option>
                </select>
              </div>

              <div className="sort-select-wrapper">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
                  <option value="newest">Urutkan: Terbaru</option>
                  <option value="oldest">Urutkan: Terlama</option>
                  <option value="score_high">Skor Tertinggi</option>
                  <option value="score_low">Skor Terendah</option>
                </select>
              </div>
            </div>

            <div className="action-buttons-group">
              <button onClick={handleExportCSV} className="export-csv-btn" disabled={submissions.length === 0}>
                <DownloadRoundedIcon /> Export CSV Data
              </button>
            </div>
          </div>

          {/* Data Table */}
          <div className="admin-table-card">
            {filteredSubmissions.length === 0 ? (
              <div className="empty-table-state">
                <WarningAmberRoundedIcon className="empty-icon" />
                <h3>Belum Ada Data Simulasi</h3>
                <p>Belum ada user yang mengisi form nutrition check, atau kriteria pencarian tidak cocok.</p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="admin-data-table">
                  <thead>
                    <tr>
                      <th>Tanggal</th>
                      <th>Nama User</th>
                      <th>No. WhatsApp</th>
                      <th>BB / TB / IMT</th>
                      <th>Skor Gizi</th>
                      <th>Kategori</th>
                      <th>Domain Perlu Perhatian</th>
                      <th>Tantangan Utama</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubmissions.map((sub) => (
                      <tr key={sub.id}>
                        <td>
                          <span className="table-date">
                            {new Date(sub.createdAt).toLocaleDateString('id-ID', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </td>
                        <td>
                          <strong className="user-name">{sub.input.name}</strong>
                        </td>
                        <td>
                          <a
                            href={`https://wa.me/${sub.input.whatsappNumber ? sub.input.whatsappNumber.replace(/[^0-9]/g, '') : ''}`}
                            target="_blank"
                            rel="noreferrer"
                            className="wa-link-table"
                            title="Chat WhatsApp"
                          >
                            <WhatsAppIcon style={{ fontSize: '1rem', color: '#25d366' }} /> {sub.input.whatsappNumber || '-'}
                          </a>
                        </td>
                        <td>
                          <div className="metrics-compact">
                            <span>{sub.input.weightKg}kg / {sub.input.heightCm}cm</span>
                            <small className="bmi-badge">IMT: {sub.bmi} ({sub.bmiCategory})</small>
                          </div>
                        </td>
                        <td>
                          <span className="score-pill">{sub.totalPercentage}%</span>
                        </td>
                        <td>
                          <span className={`status-tag status-${sub.totalCategory.toLowerCase().replace(/\s+/g, '-')}`}>
                            {sub.totalCategory}
                          </span>
                        </td>
                        <td>
                          <span className="lowest-domains-tag">{sub.lowestDomains.join(', ')}</span>
                        </td>
                        <td className="cell-truncate" title={sub.input.biggestChallenge}>
                          {sub.input.biggestChallenge}
                        </td>
                        <td>
                          <div className="table-actions">
                            <button
                              onClick={() => setSelectedSubmission(sub)}
                              className="view-detail-btn"
                              title="Lihat Detail Rekap"
                            >
                              <VisibilityRoundedIcon /> Detail
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      {selectedSubmission && (
        <div className="modal-backdrop" onClick={() => setSelectedSubmission(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>Detail Rekap Nutrition Check</h3>
                <span className="modal-sub-id">ID: {selectedSubmission.id}</span>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedSubmission(null)}>
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-user-profile">
                <div className="profile-col">
                  <span className="label">Nama Lengkap:</span>
                  <strong className="value">{selectedSubmission.input.name}</strong>
                </div>
                <div className="profile-col">
                  <span className="label">No. WhatsApp:</span>
                  <strong className="value" style={{ color: '#009f9d' }}>{selectedSubmission.input.whatsappNumber || '-'}</strong>
                </div>
                <div className="profile-col">
                  <span className="label">Waktu Simulasi:</span>
                  <span className="value">{new Date(selectedSubmission.createdAt).toLocaleString('id-ID')}</span>
                </div>
                <div className="profile-col">
                  <span className="label">Postur Tubuh:</span>
                  <span className="value">
                    {selectedSubmission.input.weightKg} kg / {selectedSubmission.input.heightCm} cm (IMT: {selectedSubmission.bmi} - {selectedSubmission.bmiCategory})
                  </span>
                </div>
                <div className="profile-col">
                  <span className="label">Persetujuan Privasi:</span>
                  <span className="value" style={{ color: '#27ae60', fontWeight: 'bold' }}>
                    {selectedSubmission.input.consentAgreed ? '✓ Disetujui User' : 'Belum'}
                  </span>
                </div>
              </div>

              <div className="modal-score-summary">
                <div className="summary-badge">
                  <span>Skor Pola Hidup:</span>
                  <strong>{selectedSubmission.totalPercentage}% ({selectedSubmission.totalScore}/20 Poin)</strong>
                </div>
                <div className={`status-tag status-${selectedSubmission.totalCategory.toLowerCase().replace(/\s+/g, '-')}`}>
                  Kategori: {selectedSubmission.totalCategory}
                </div>
              </div>

              <div className="modal-domain-breakdown">
                <h4>Rincian Skor Domain:</h4>
                <div className="domain-grid-modal">
                  {selectedSubmission.domainScores.map((d) => (
                    <div key={d.domainKey} className="modal-domain-card">
                      <span className="d-name">{d.label}</span>
                      <span className="d-val">{d.score}/{d.maxScore} ({d.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-user-answers">
                <h4>Jawaban & Profil Pengguna:</h4>
                <ul>
                  <li><strong>Tantangan Terbesar:</strong> {selectedSubmission.input.biggestChallenge}</li>
                  <li><strong>Harapan / Target:</strong> {selectedSubmission.input.goal}</li>
                  <li><strong>Sayur:</strong> {selectedSubmission.input.veggiePortion} porsi/hari</li>
                  <li><strong>Buah:</strong> {selectedSubmission.input.fruitPortion} porsi/hari</li>
                  <li><strong>Air Putih:</strong> {selectedSubmission.input.waterIntake}</li>
                  <li><strong>Sarapan:</strong> {selectedSubmission.input.breakfastHabit}</li>
                  <li><strong>Manis & Gorengan:</strong> Manis ({selectedSubmission.input.sweetIntake}), Gorengan ({selectedSubmission.input.friedIntake})</li>
                  <li><strong>Aktivitas Fisik:</strong> {selectedSubmission.input.physicalActivity} kali/minggu</li>
                  <li><strong>Durasi Tidur:</strong> {selectedSubmission.input.sleepDuration} jam</li>
                  <li><strong>Stres:</strong> {selectedSubmission.input.stressLevel}</li>
                </ul>
              </div>

              <div className="modal-narrative">
                <h4>Narasi Rekomendasi yang Ditampilkan ke User:</h4>
                <p>{selectedSubmission.narrative}</p>
              </div>
            </div>

            <div className="modal-footer">
              <a
                href={
                  selectedSubmission.input.whatsappNumber
                    ? `https://wa.me/${selectedSubmission.input.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        `Halo ${selectedSubmission.input.name}, kami dari tim Ahli Gizi Kitogizi melihat hasil Nutrition Check Anda (Skor: ${selectedSubmission.totalPercentage}%, Kategori: ${selectedSubmission.totalCategory}). Apakah Anda ada waktu untuk diskusi konseling gizi?`
                      )}`
                    : createWhatsappHref(
                        `Halo ${selectedSubmission.input.name}, kami dari tim Ahli Gizi Kitogizi melihat hasil Nutrition Check Anda (Skor: ${selectedSubmission.totalPercentage}%, Kategori: ${selectedSubmission.totalCategory}). Apakah Anda ada waktu untuk diskusi konseling gizi?`
                      )
                }
                target="_blank"
                rel="noreferrer"
                className="modal-wa-btn"
              >
                <WhatsAppIcon /> Hubungi {selectedSubmission.input.name} via WhatsApp
              </a>
              <button onClick={() => setSelectedSubmission(null)} className="modal-secondary-btn">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;
