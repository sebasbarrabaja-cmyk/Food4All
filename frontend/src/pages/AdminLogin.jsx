import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

export default function AdminLogin() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ user, password }),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error ?? 'No se pudo iniciar sesión.');
      navigate('/admin');
    } catch {
      setError('No se pudo conectar con el servidor.');
    }
  }

  return (
    <main className="container" style={{ maxWidth: 420, padding: '64px 16px' }}>
      <p className="eyebrow"><Icon name="lock" size={16} /> Administración</p>
      <h1 style={{ fontSize: '2rem' }}>Iniciar sesión</h1>
      <form className="panel" onSubmit={submit}>
        <div className="field">
          <label htmlFor="user">Usuario</label>
          <input id="user" autoComplete="username" value={user} onChange={(e) => setUser(e.target.value)} required />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p role="alert" style={{ color: 'var(--danger)' }}>{error}</p>}
        <button className="btn btn-primary" type="submit">Entrar</button>
      </form>
      <p style={{ marginTop: 16 }}><Link to="/" className="admin-link">← Volver a la web pública</Link></p>
    </main>
  );
}
