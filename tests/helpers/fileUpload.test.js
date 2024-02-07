import { fileUpload } from '../../src/helpers/fileUpload';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dvsnyzl4z',
  api_key: '739862864671873',
  api_secret: 'XP-A7LV-pLCJCphi8pbrBNCCfcc',
  secure: true
});

describe('fileUpload', () => {
  test('should upload a file to cloudinary successfully', async () => {
    const imgUrl = 'https://thumbs.dreamstime.com/b/test-red-round-symbol-isolated-sign-white-120986445.jpg';
    const resp = await fetch(imgUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'test.jpg', {});

    const url = await fileUpload(file);

    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');
    await cloudinary.api.delete_resources(['journal/' + imageId], {
      resource_type: 'image'
    });
  });

  test('should return null if there is no file', async () => {
    const file = new File([], 'test.jpg', {});

    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
