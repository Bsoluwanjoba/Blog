import React, { useState, useEffect } from 'react'
import Image from 'next/image';

const comments = [
    {
      text: 'Great app!',
      author: {
        name: 'John Doe',
        image: 'https://robohash.org/hitxvr', 
      },
    },
    {
      text: 'Love the features.',
      author: {
        name: 'Jane Smith',
        image: 'https://robohash.org/hitxcv', 
      },
    },
    {
      text: 'Awesome functionality!',
      author: {
        name: 'Alex Johnson',
        image: 'https://robohash.org/hitdv', 
    },
  },
  {
    text: 'User-friendly interface.',
    author: {
      name: 'Emily Brown',
      image: 'https://robohash.org/hitfb', 
    },
  },
  {
    text: 'Impressive design!',
    author: {
      name: 'Michael Lee',
      image: 'https://robohash.org/hitfv', 
    },
  },
  {
    text: 'Helpful support team.',
    author: {
      name: 'Sarah Miller',
      image: 'https://robohash.org/hivdt', 
    },
  },
  {
    text: 'Innovative features!',
    author: {
      name: 'David Wilson',
      image: 'https://robohash.org/hitv', 
    },
  },
  {
    text: 'Easy to navigate.',
    author: {
      name: 'Olivia Turner',
      image: 'https://robohash.org/hited', 
    },
  },
  {
    text: 'Highly recommended!',
    author: {
      name: 'Ryan Davis',
      image: 'https://robohash.org/hitr', 
    },
  },
  {
    text: 'Outstanding experience!',
    author: {
      name: 'Sophia White',
      image: 'https://robohash.org/hitman', 
    },
  },
];

export default function Comments() {
    const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

    const handleNextComment = () => {
      setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    };
  
    const handlePrevComment = () => {
      setCurrentCommentIndex(
        (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
      );
    };
  
    useEffect(() => {
      // Autoplay every 5 seconds
      const interval = setInterval(() => {
        handleNextComment();
      }, 3000);

      return () => clearInterval(interval);
    }, [currentCommentIndex]);
  
    const currentComment = comments[currentCommentIndex];
  

  return (
     
        
        <div className="max-w-4xl mx-auto p-8 border rounded-2xl shadow-2xl h-[30vh] bg-white lg:w-[500px] mt-[200px] mb-[100px] border-[red]">
    <div className="flex items-center">
      <Image
        src={currentComment.author.image}
        alt={`${currentComment.author.name}'s image`}
        className="rounded-full w-12 h-12 mr-4"
        width={50}
        height={50}
      />
      <div>
        <p className="text-lg font-bold">{currentComment.author.name}</p>
      </div>
    </div>
    <div className="mb-8 text-lg">{currentComment.text}</div>
    <div className="flex flex-col md:flex-row md:justify-between">
      <button onClick={handlePrevComment} className="btn mb-2 md:mb-0 bg-[red] text-[white] rounded-2xl py-[5px] px-[5px]">
        Previous
      </button>
      <button onClick={handleNextComment} className="btn  bg-[red] text-[white] rounded-2xl py-[5px] px-[5px]">
        Next
      </button>
    </div>
  </div>

    )
}
