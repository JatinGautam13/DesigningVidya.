import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, BadgeIndianRupee, CheckCircle2, BookOpen } from "lucide-react";
import coursesData from "@/data/courses.json";
import styles from "./style.module.css";

// Map course IDs to images
const courseImages = {
  "GD-AI-01": "/uploads/web%20p/uw5apddwgglibwox2j9n.webp",
  "VE-AI-01": "/uploads/web%20p/yo98tajyhjnsd4rr9fex.webp",
  "MG-AI-01": "/uploads/web%20p/g5qhpmctapzpwjjgpmlf.webp",
  "ADV-2D-AI-01": "/uploads/web%20p/rh31c6rw5qyj7tha0kv6.webp",
  "DIP-AI-01": "/uploads/web%20p/ghxqqxlgematwrkjrywf.webp"
};

export async function generateStaticParams() {
  return coursesData.courses.map((course) => ({
    id: course.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = coursesData.courses.find((c) => c.id === id);
  
  if (!course) {
    return {
      title: "Course Not Found | Designing Vidya",
    };
  }

  return {
    title: `${course.title} | Designing Vidya`,
    description: course.description,
  };
}

export default async function CoursePage({ params }) {
  const { id } = await params;
  const course = coursesData.courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  const courseImage = courseImages[course.id];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground} />
        <div className={styles.container}>
          <Link href="/courses" className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Courses
          </Link>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.categoryBadge}>{course.category}</div>
              <h1 className={styles.courseTitle}>{course.title}</h1>
              <p className={styles.courseDescription}>{course.description}</p>

              <div className={styles.courseMetaInfo}>
                <div className={styles.metaItem}>
                  <Clock className={styles.metaIcon} />
                  <span>{course.duration}</span>
                </div>
                <div className={styles.metaItem}>
                  <BadgeIndianRupee className={styles.metaIcon} />
                  <span>₹{course.price.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className={styles.ctaButtons}>
                <Link href="/contact-us" className={styles.enrollButton}>
                  Enroll Now
                </Link>
                <a 
                  href="https://wa.me/917827250823" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactButton}
                >
                  Contact Us
                </a>
              </div>
            </div>

            {courseImage && (
              <div className={styles.heroImage}>
                <Image
                  src={courseImage}
                  alt={course.title}
                  width={600}
                  height={400}
                  className={styles.image}
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className={styles.outcomesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What You'll Learn</h2>
          <div className={styles.outcomesGrid}>
            {course.outcomes.map((outcome, index) => (
              <div key={index} className={styles.outcomeCard}>
                <CheckCircle2 className={styles.outcomeIcon} />
                <p className={styles.outcomeText}>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className={styles.modulesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Course Curriculum</h2>
          <div className={styles.modulesGrid}>
            {course.modules.map((module) => (
              <div key={module.module} className={styles.moduleCard}>
                <div className={styles.moduleHeader}>
                  <BookOpen className={styles.moduleIcon} />
                  <div>
                    <div className={styles.moduleNumber}>Module {module.module}</div>
                    <h3 className={styles.moduleTitle}>{module.title}</h3>
                  </div>
                </div>
                <ul className={styles.topicsList}>
                  {module.topics.map((topic, index) => (
                    <li key={index} className={styles.topicItem}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Start Your Journey?</h2>
            <p className={styles.ctaDescription}>
              Join thousands of students who have transformed their careers with our courses.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact-us" className={styles.enrollButton}>
                Enroll Now
              </Link>
              <a 
                href="https://wa.me/917827250823" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactButton}
              >
                Talk to Advisor
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}