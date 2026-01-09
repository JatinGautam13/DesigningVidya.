import CardCourses from '@/components/courses/CardCourses';
import CoursesGridSection from '@/components/courses/CoursesGridSection';

export const metadata = {
  title: 'Our Courses | Designing Vidya',
  description: 'Explore our comprehensive range of courses designed to help you succeed in your career.',
};

export default function CoursesPage() {
  return (
    <main id="main-content">
      <CoursesGridSection />
      <CardCourses  />
    </main>
  );
}
