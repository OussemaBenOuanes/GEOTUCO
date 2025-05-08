"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [search, setSearch] = useState('');

  return (
    <nav style={{
      width: '100%',
      background: '#fff',
      boxShadow: '0 2px 8px #e0e6ed',
      padding: '1rem 0',
      marginBottom: '0',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem'
      }}>
        <Link href="/" style={{
          fontWeight: 800,
          fontSize: '1.4rem',
          color: '#2a4d69',
          textDecoration: 'none',
          letterSpacing: '1px'
        }}>
          GEOTUCO
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/about" style={{ color: '#4b86b4', textDecoration: 'none', fontWeight: 500 }}>About</Link>
          <Link href="/services" style={{ color: '#4b86b4', textDecoration: 'none', fontWeight: 500 }}>Services</Link>
          <button
            type="button"
            style={{
              background: '#4b86b4',
              color: '#fff',
              padding: '0.5rem 1.2rem',
              borderRadius: 6,
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => { /* Add modal or contact logic here if needed */ }}
          >
            Contact
          </button>
          <form
            onSubmit={e => { e.preventDefault(); /* implement search logic here if needed */ }}
            style={{ marginLeft: '1.5rem', display: 'flex', alignItems: 'center' }}
          >
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: 6,
                border: '1px solid #c7e0f4',
                fontSize: '1rem',
                outline: 'none',
                marginRight: '0.5rem',
                background: '#f7f9fa'
              }}
            />
            <button
              type="submit"
              style={{
                background: '#4b86b4',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '0.4rem 1rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
