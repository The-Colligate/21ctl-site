import React from 'react';
import { eventsArray } from '../../../data/eventsData';
import { useRouter } from 'next/router';
export function EventLayout ({ children, truncate, getEvent, post }) {
    const router = useRouter();
  return (
    <>
      <div className="flex sm:flex-row flex-col sm:px-20 px-8 py-10 pb-10">
        {/* event lists */}
        <div className="flex flex-col">
          <div className="mb-5">
            <h3 className="text-6xl font-extrabold text-primary-orange">
              Events
            </h3>
          </div>

          <div className="post_list space-y-4 overflow-y-scroll  ">
            {/* post title */}
            {eventsArray.map((event) => (
              <div
                key={event.id}
                onClick={() => getEvent(event.id)}
                className={`${post?.id === event.id ? `bg-[#D9D9D9]` :'' } px-4 py-1 font-semibold cursor-pointer w-[250px]`}
              >
                {truncate(event.title, 25)}
              </div>
            ))}
          </div>
        </div>

        {children}
      </div>
    </>
  );
};

