import { describe, it, expect } from 'vitest';
import { personal, projects, honors, experiences, getFooterText } from './portfolio';

describe('Portfolio Content Module', () => {
  it('contentRetainsApprovedProjectsAndDestinations', () => {
    expect(personal.name).toBe('Samuel Hernandez Balderas');
    expect(getFooterText()).toContain('Samuel Hernandez Balderas');
    
    expect(projects.length).toBe(4);
    expect(projects[0].name).toBe('Interleave');
    expect(projects[0].source).toBe('https://github.com/SamuelIVX/interleave');
    expect(projects[1].name).toBe('PayCore');
    expect(projects[1].demo).toBe('https://paycorehq.vercel.app/');
    expect(projects[1].source).toBe('https://github.com/SamuelIVX/paycore');
    expect(projects[2].name).toBe('Clarify');
    expect(projects[2].demo).toBe('https://clarify-study.vercel.app/');
    expect(projects[2].source).toBe('https://github.com/SamuelIVX/clarify');
    expect(projects[3].name).toBe('FoodSense');
    expect(projects[3].source).toBe('https://github.com/SamuelIVX/FoodSense');
  });

  it('experiencesRetainResumeBulletsAndFullDates', () => {
    expect(experiences.length).toBe(6);
    expect(experiences[0].company).toBe('Amazon Web Services');
    expect(experiences[0].date).toBe('June 2026 – August 2026');
    expect(experiences[0].points[0]).toContain('Designed and deployed 3 read-only APIs');
    
    let totalBullets = 0;
    experiences.forEach(e => {
      totalBullets += e.points.length;
    });
    expect(totalBullets).toBe(18);
    
    // AWS resume bullets = 3 experiences * 3 points = 9
    let awsBullets = experiences.filter(e => e.id.startsWith('aws')).reduce((sum, e) => sum + e.points.length, 0);
    expect(awsBullets).toBe(9);
  });

  it('honorsPreserveAmountsOrderAndApproximateCounts', () => {
    expect(honors.length).toBe(3);
    expect(honors[0].title).toBe('Amazon Future Engineer Scholarship');
    expect(honors[0].amount).toBe('$40,000');
    expect(honors[0].distinction).toBe('One of 400 students nationwide');
    expect(honors[0].date).toBe('April 2023');

    expect(honors[1].title).toBe('Meringoff MVP Scholarship');
    expect(honors[1].amount).toBe('$1,000');
    expect(honors[1].distinction).toBe('One of two student finalists');
    expect(honors[1].date).toBe('June 2023');

    expect(honors[2].title).toBe('SparkYouth NYC Scholarship');
    expect(honors[2].amount).toBe('$1,160');
    expect(honors[2].distinction).toBe('One of approximately 50 students nationwide');
    expect(honors[2].date).toBe('June 2023');
  });
});
