import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip } from '@mui/material';

const GithubContributions = () => {
  const [isLight, setIsLight] = useState(
    document.documentElement.classList.contains('light')
  );
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    // Observer to detect light/dark theme toggles on <html> element
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.classList.contains('light'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const transformData = (data) => {
    const total = data.reduce((acc, day) => acc + day.count, 0);
    setTotalContributions(total);
    return data;
  };

  const getTooltipTitle = (activity) => {
    const count = activity.count;
    const date = activity.date;

    let formattedDate = date;
    try {
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        formattedDate = parsedDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
      }
    } catch (e) {
      // fallback to original date string
    }

    if (count === 0) {
      return `No contributions on ${formattedDate}`;
    }
    if (count === 1) {
      return `1 contribution on ${formattedDate}`;
    }
    return `${count} contributions on ${formattedDate}`;
  };

  // Custom premium theme colors that match the site design
  const customTheme = {
    light: ['rgba(0, 0, 0, 0.06)', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['rgba(255, 255, 255, 0.05)', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section className="github-section-new" id="contributions">
      <h2 className="github-section-title">GitHub</h2>

      <div className="github-subheader">
        <span className="github-sub-left">ACTIVITY</span>
        <div className="github-sub-right">
          <a
            href="https://github.com/hardiksinghh18"
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            @hardiksinghh18 ↗
          </a>
          <span className="github-divider">•</span>
          <span className="github-contrib-count">{totalContributions} CONTRIBUTIONS</span>
        </div>
      </div>

      <div className="github-calendar-wrapper">
        <GitHubCalendar
          username="hardiksinghh18"
          theme={customTheme}
          colorScheme={isLight ? 'light' : 'dark'}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          transformData={transformData}
          showTotalCount={true}
          showColorLegend={true}
          renderBlock={(block, activity) => (
            <Tooltip
              key={activity.date}
              title={getTooltipTitle(activity)}
              arrow
              placement="top"
            >
              {block}
            </Tooltip>
          )}
        />
      </div>
    </section>
  );
};

export default GithubContributions;
