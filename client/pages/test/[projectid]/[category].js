import { useRouter } from 'next/router';

export default function ProjectCategoryPage() {
  const router = useRouter();
  const { projectid, category } = router.query;
  return (
    <div>
      {/* Render content based on fetched data */}
      <h1>{projectid}</h1>
      <p>{category}</p>
      {/* ... */}
    </div>
  );
}
