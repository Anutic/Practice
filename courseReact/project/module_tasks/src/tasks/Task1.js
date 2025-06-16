import React from 'react';

const photos = [
  {
    "albumId": 1,
    "id": 1,
    "title": "green",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "purple",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
];

const PhotoItem = ({ photo }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
    <h3>{photo.title}</h3>
    <img src={photo.thumbnailUrl} alt={photo.title} width="150" height="150" />
    <p>Album ID: {photo.albumId}</p>
  </div>
);

const Task1 = () => {
  return (
    <div>
      <h2>Task 1: Photo List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map(photo => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Task1;