"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight,
  Clock
} from "lucide-react";
import styles from "./CardCourses.module.css";
import coursesData from "@/data/courses.json";

// Map course IDs to images and tags
const courseImages = {
  "GD-AI-01": {
    src: "/uploads/web%20p/uw5apddwgglibwox2j9n.webp",
    alt: "Graphic designing course"
  },
  "VE-AI-01": {
    src: "/uploads/web%20p/yo98tajyhjnsd4rr9fex.webp",
    alt: "Video editing course"
  },
  "MG-AI-01": {
    src: "/uploads/web%20p/g5qhpmctapzpwjjgpmlf.webp",
    alt: "Motion graphics course"
  },
  "ADV-2D-AI-01": {
    src: "/uploads/web%20p/rh31c6rw5qyj7tha0kv6.webp",
    alt: "Animation course"
  },
  "DIP-AI-01": {
    src: "/uploads/web%20p/ghxqqxlgematwrkjrywf.webp",
    alt: "VFX course"
  }
};

const courseTags = {
  "GD-AI-01": ["graphic design", "AI tools", "photoshop", "illustrator"],
  "VE-AI-01": ["video editing", "reels & shorts", "premiere pro", "AI captions"],
  "MG-AI-01": ["motion graphics", "kinetic typography", "after effects", "AI animation"],
  "ADV-2D-AI-01": ["2D animation", "digital illustration", "character design", "AI concept art"],
  "DIP-AI-01": ["animation", "VFX", "compositing", "professional training"]
};

export default function CoursesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // Get courses from JSON data
  const courses = coursesData.courses || [];

  return (
    <section id="courses" className={styles.section}>
      {/* Background */}
      <div className={styles.backgroundGlow} />
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <button className={styles.label}>
            Our Programs
          </button>
          <h2 className={styles.heading}>
            <span className={styles.headingWhite}>Kickstart Your Career</span>
            <br />
            <span className={styles.headingGradient}>Choose Your Path</span>
          </h2>
          <p className={styles.description}>
            Industry-aligned courses designed to transform your passion into a thriving career
          </p>
        </div>

        {/* Course Grid */}
        <div className={styles.courseGrid}>
          {courses.map((course, index) => {
            const isOpen = openIndex === index;
            const courseImage = courseImages[course.id];
            const tags = courseTags[course.id] || [];

            return (
              <div
                key={course.id}
                className={`${styles.courseCard} ${isOpen ? styles.courseCardOpen : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardMedia}>
                  {courseImage && (
                    <Image
                      src={courseImage.src}
                      alt={courseImage.alt}
                      fill
                      className={styles.cardMediaImage}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                </div>

                <button
                  type="button"
                  className={styles.cardHead}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className={styles.headings}>
                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    <div className={styles.courseInfo}>
                      <span className={styles.infoItem}>
                        <Clock size={14} /> {course.duration}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className={`${styles.toggleIcon} ${isOpen ? styles.toggleIconOpen : ""}`} />
                </button>

                <div className={`${styles.cardBody} ${isOpen ? styles.cardBodyOpen : ""}`}>
                  <p className={styles.courseDesc}>{course.description}</p>

                  <div className={styles.skillsWrapper}>
                    {tags.map((tag) => (
                      <span key={tag} className={styles.skillTag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/courses/${course.id}`} className={styles.courseBtn}>
                    Explore Course
                    <ArrowRight className={styles.btnIcon} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}