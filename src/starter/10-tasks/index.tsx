import { useEffect, useState } from "react";
import { type Tour, tourSchema } from './types';
const url = 'https://www.course-api.com/react-tours-project';


function Component() {

  const [isLoading,setLoading] = useState<boolean>(false)
  const [isError, setError] = useState<string | null>(null)
  const [tours, setTours] = useState<Tour[]>([])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      if(!response.ok){
        throw new Error('Failed to fetch...')
      }

      const rawData: Tour[] = await response.json()
      const result = tourSchema.array().safeParse(rawData);

      if (!result.success) {
        console.log(result.error.message);
        throw new Error(`Failed to parse tours`);
      }
      setTours(result.data);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'There was an Error'
      setError(message)
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  if(isLoading){
    return <h3>is Loading</h3>
  }

  if(isError){
    return <h3>is Error</h3>
  }

  return (
    <div>
      <h2>React & Typescript</h2>
      {tours.map((tour) => {
        return (
          <p key={tour.id} className='mb-1'>
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}
export default Component;
