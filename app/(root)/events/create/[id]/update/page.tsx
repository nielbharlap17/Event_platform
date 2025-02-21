import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";

const UpdateEvent = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const { sessionClaims } = await auth();
      setUserId(sessionClaims?.userId as string);
    };

    fetchUserId();
  }, []);

  if (!userId) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Update" />
      </div>
    </>
  );
};

export default UpdateEvent;