document.getElementById('uploadForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const statusElement = document.getElementById('status');
  const imageInput = document.getElementById('imageInput');

  if (imageInput.files.length === 0) {
    statusElement.textContent = 'Please select an image to upload.';
    return;
  }

  const formData = new FormData();
  formData.append('image', imageInput.files[0]);

  formData.append('model', "company");
  formData.append('is_active',true);
  formData.append('image_type', "image");
  const myServerUrl="https://spacez.otion.tech/api/upload_image/c0ac7a3e-408e-4662-ae3d-801b76f0777b"
  const customServer="https://api.imgbb.com/1/upload?key=58d165f02ad5e0539f6d255bdb8e98b1"

  try {
    const response = await fetch(customServer, {
      method: 'POST',
      // headers: {
      //   "Access-Control-Allow-Methods": "POST",
      //   "Access-Control-Allow-Headers": "X-Requested-With"
      //   // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2MzA1MjM3LCJpYXQiOjE3MTYxMzI0MzcsImp0aSI6IjUxNmQyZDJjMWFmYTQzNzJhZTUxYTUzYTIwZjlkN2E1IiwidXNlcl9pZCI6IjBhYjJkMWU2LTg5MzItNDFiZC04OWFkLWQyOGMwYzUyMmI4YSIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImNvbXBhbnlfaWQiOm51bGwsImJyYW5jaGVzIjpbXX0.UftS7hLQ25k1xkvyg3IjqH2dhxX1RrBtcCcGlydi0mw`  // Set the token in the header
      // },
      body: formData
    });

    if (response.ok) {
      const result = await response.json();
      statusElement.textContent = 'Upload successful!';
      console.log('Server response:', result);
    } else {
      statusElement.textContent = 'Upload failed. Please try again.';
      console.error('Upload failed:', response.statusText);
    }
  } catch (error) {
    statusElement.textContent = 'An error occurred. Please try again.';
    console.error('Error:', error);
  }
});
