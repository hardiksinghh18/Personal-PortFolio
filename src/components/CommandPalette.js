import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CommandPalette = ({ isOpen, setIsOpen }) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [toast, setToast] = useState(null);
    const listRef = useRef(null);
    const inputRef = useRef(null);
    const mousePosRef = useRef({ x: -1, y: -1 });
    const navigate = useNavigate();

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 2500);
    };

    const sections = [
        {
            group: 'Sections',
            items: [
                {
                    id: 'nav-home',
                    title: 'Home',
                    shortcut: 'shift + H',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    ),
                    action: () => {
                        navigate('/');
                        setTimeout(() => {
                            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }
                },
                {
                    id: 'nav-exp',
                    title: 'Experience',
                    shortcut: 'shift + E',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                    ),
                    action: () => {
                        navigate('/');
                        setTimeout(() => {
                            document.getElementById('workExperience')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }
                },
                {
                    id: 'nav-skills',
                    title: 'Skills',
                    shortcut: 'shift + S',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                    ),
                    action: () => {
                        navigate('/');
                        setTimeout(() => {
                            document.getElementById('skillsNew')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }
                },
                {
                    id: 'nav-projects',
                    title: 'Projects',
                    shortcut: 'shift + P',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    ),
                    action: () => navigate('/projects')
                },
                {
                    id: 'nav-blogs',
                    title: 'Blogs',
                    shortcut: 'shift + B',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                        </svg>
                    ),
                    action: () => {
                        navigate('/');
                        setTimeout(() => {
                            document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }
                },
                {
                    id: 'nav-contact',
                    title: 'Contact / Let\'s Connect',
                    shortcut: 'shift + A',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    ),
                    action: () => {
                        navigate('/');
                        setTimeout(() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }
                }
            ]
        },
        {
            group: 'Socials & Profiles',
            items: [
                {
                    id: 'soc-github',
                    title: 'GitHub',
                    shortcut: 'shift + G',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                    ),
                    action: () => window.open('https://github.com/hardiksinghh18', '_blank')
                },
                {
                    id: 'soc-linkedin',
                    title: 'LinkedIn',
                    shortcut: 'shift + L',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                    ),
                    action: () => window.open('https://www.linkedin.com/in/hardiksingh18', '_blank')
                },
                {
                    id: 'soc-twitter',
                    title: 'Twitter / X',
                    shortcut: 'shift + X',
                    icon: (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    ),
                    action: () => window.open('https://twitter.com/hardiksingh18_', '_blank')
                },
                {
                    id: 'soc-leetcode',
                    title: 'LeetCode',
                    shortcut: 'shift + K',
                    icon: (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 5.79a1.374 1.374 0 0 0-.005 1.94 1.374 1.374 0 0 0 1.94.005l5.35-5.352A1.374 1.374 0 0 0 13.483 0zm-8.8 6.786a1.374 1.374 0 0 0-.97.411l-3.3 3.3a1.374 1.374 0 0 0 0 1.942l3.3 3.3a1.374 1.374 0 0 0 1.94-1.942l-2.33-2.33 2.33-2.33a1.374 1.374 0 0 0-.97-2.351z" />
                        </svg>
                    ),
                    action: () => window.open('https://leetcode.com/u/hardiksingh18_/', '_blank')
                }
            ]
        },
        {
            group: 'Featured Work',
            items: [
                {
                    id: 'feat-synckro',
                    title: 'SyncKro (Latest App)',
                    shortcut: 'shift + Y',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    ),
                    action: () => window.open('https://synckro.vercel.app/', '_blank')
                }
            ]
        },
        {
            group: 'General',
            items: [
                {
                    id: 'gen-email',
                    title: 'Copy Email',
                    shortcut: 'shift + C',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    ),
                    action: () => {
                        navigator.clipboard.writeText('hardiksingh.codes@gmail.com');
                        showToast('Email address copied to clipboard!');
                    }
                },
                {
                    id: 'gen-link',
                    title: 'Copy Page Link',
                    shortcut: 'shift + U',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                    ),
                    action: () => {
                        navigator.clipboard.writeText(window.location.href);
                        showToast('Page link copied to clipboard!');
                    }
                },
                {
                    id: 'gen-resume',
                    title: 'View Resume',
                    shortcut: 'shift + R',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                    ),
                    action: () => window.open('https://drive.google.com/file/d/13VNxEr2QN2Yiy6C-XQgP2CsGYGGQzxmp/view', '_blank')
                },
                {
                    id: 'gen-theme',
                    title: 'Toggle Theme',
                    shortcut: 'shift + T',
                    icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    ),
                    action: () => {
                        window.dispatchEvent(new CustomEvent('toggle-theme'));
                        const isLightNow = document.documentElement.classList.contains('light');
                        showToast(isLightNow ? 'Switched to Light Theme' : 'Switched to Dark Theme');
                    }
                }
            ]
        }
    ];

    // Flatten items for filtering and index selection
    const allItems = sections.flatMap((sec) =>
        sec.items.map((item) => ({ ...item, group: sec.group }))
    );

    const filteredItems = allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.group.toLowerCase().includes(query.toLowerCase())
    );

    // Custom event listener & keyboard shortcut listeners
    useEffect(() => {
        const handleToggle = () => setIsOpen((prev) => !prev);
        window.addEventListener('toggle-command-palette', handleToggle);

        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            } else if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            } else if (isOpen && e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && e.key.length === 1) {
                const pressedKey = e.key.toLowerCase();
                const matchingItem = allItems.find((item) => {
                    if (!item.shortcut) return false;
                    const parts = item.shortcut.toLowerCase().split('+').map((s) => s.trim());
                    return parts.includes('shift') && parts.includes(pressedKey);
                });

                if (matchingItem) {
                    e.preventDefault();
                    matchingItem.action();
                    setIsOpen(false);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('toggle-command-palette', handleToggle);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, setIsOpen, allItems]);

    // Focus input and lock body/html scroll on open
    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            setQuery('');
            setSelectedIndex(0);
            if (listRef.current) {
                listRef.current.scrollTop = 0;
            }
            setTimeout(() => inputRef.current?.focus(), 50);
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }

        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Container-only scroll helper to avoid scrolling window/body
    const scrollToIndex = (index) => {
        if (!listRef.current) return;
        const list = listRef.current;
        const items = list.querySelectorAll('.cmd-item');
        const selectedEl = items[index];
        if (selectedEl) {
            const listRect = list.getBoundingClientRect();
            const itemRect = selectedEl.getBoundingClientRect();
            const padding = 10;

            if (itemRect.top < listRect.top + padding) {
                list.scrollTop -= (listRect.top + padding - itemRect.top);
            } else if (itemRect.bottom > listRect.bottom - padding) {
                list.scrollTop += (itemRect.bottom - (listRect.bottom - padding));
            }
        }
    };

    // Only change selection on mouse move if the user physically moved the mouse pointer
    const handleMouseMove = (index, e) => {
        if (mousePosRef.current.x !== e.clientX || mousePosRef.current.y !== e.clientY) {
            mousePosRef.current = { x: e.clientX, y: e.clientY };
            setSelectedIndex(index);
        }
    };

    // Keyboard navigation & shortcut execution
    const handleListKeyDown = (e) => {
        if (e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey && e.key.length === 1) {
            const pressedKey = e.key.toLowerCase();
            const matchingItem = allItems.find((item) => {
                if (!item.shortcut) return false;
                const parts = item.shortcut.toLowerCase().split('+').map((s) => s.trim());
                return parts.includes('shift') && parts.includes(pressedKey);
            });

            if (matchingItem) {
                e.preventDefault();
                matchingItem.action();
                setIsOpen(false);
                return;
            }
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((prev) => {
                const nextIndex = prev < filteredItems.length - 1 ? prev + 1 : 0;
                scrollToIndex(nextIndex);
                return nextIndex;
            });
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((prev) => {
                const nextIndex = prev > 0 ? prev - 1 : filteredItems.length - 1;
                scrollToIndex(nextIndex);
                return nextIndex;
            });
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (filteredItems[selectedIndex]) {
                filteredItems[selectedIndex].action();
                setIsOpen(false);
            }
        }
    };

    if (!isOpen) return null;

    let globalIndex = 0;

    return (
        <div 
            className="cmd-backdrop" 
            onClick={() => setIsOpen(false)}
            onWheel={(e) => e.stopPropagation()}
        >
            <div 
                className="cmd-modal" 
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => e.stopPropagation()}
            >
                
                {/* Header Banner */}
                <div className="cmd-top-banner">
                    <div className="cmd-title-group">
                        <div className="cmd-app-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                                <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                                <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
                                <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                            </svg>
                        </div>
                        <div className="cmd-header-text">
                            <div className="cmd-header-title">Navigation Menu</div>
                            <div className="cmd-header-desc">Quickly jump to sections or actions</div>
                        </div>
                    </div>
                    <button className="cmd-close-btn" onClick={() => setIsOpen(false)}>✕</button>
                </div>

                {/* Search Bar */}
                <div className="cmd-search-bar">
                    <svg className="cmd-search-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search for actions..."
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setSelectedIndex(0);
                        }}
                        onKeyDown={handleListKeyDown}
                        className="cmd-input"
                    />
                </div>

                {/* Toast Notification */}
                {toast && <div className="cmd-toast">{toast}</div>}

                {/* Grouped Commands List */}
                <div className="cmd-list" ref={listRef}>
                    {filteredItems.length === 0 ? (
                        <div className="cmd-empty">No matching actions found.</div>
                    ) : (
                        sections.map((group) => {
                            const groupFilteredItems = group.items.filter((item) =>
                                item.title.toLowerCase().includes(query.toLowerCase()) ||
                                group.group.toLowerCase().includes(query.toLowerCase())
                            );

                            if (groupFilteredItems.length === 0) return null;

                            return (
                                <div key={group.group} className="cmd-group-block">
                                    <div className="cmd-group-label">{group.group}</div>
                                    {groupFilteredItems.map((item) => {
                                        const currentIndex = globalIndex++;
                                        const isSelected = currentIndex === selectedIndex;

                                        return (
                                            <div
                                                key={item.id}
                                                className={`cmd-item ${isSelected ? 'selected' : ''}`}
                                                onClick={() => {
                                                    item.action();
                                                    setIsOpen(false);
                                                }}
                                                onMouseMove={(e) => handleMouseMove(currentIndex, e)}
                                            >
                                                <div className="cmd-item-left">
                                                    <span className="cmd-item-icon-box">{item.icon}</span>
                                                    <span className="cmd-item-title">{item.title}</span>
                                                </div>
                                                <span className="cmd-item-shortcut">{item.shortcut}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Footer Bar */}
                <div className="cmd-footer">
                    <div className="cmd-footer-hints">
                        <span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span>
                        <span><kbd>↵</kbd> to select</span>
                    </div>
                    <span className="cmd-footer-esc"><kbd>esc</kbd> to close</span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;

