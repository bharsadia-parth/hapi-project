import crypto from 'crypto';

 export function generateShortcode(urlPath) {

    if(!urlPath){
        throw "Url path not found"
    }
  // Step 1: Get current timestamp in milliseconds
  const timestamp = Date.now().toString();

  // Step 2: Combine URL path and timestamp
  const rawString = `${urlPath}-${timestamp}`;

  // Step 3: Create a SHA-256 hash
  const hash = crypto.createHash('sha256').update(rawString).digest('base64');

  // Step 4: Make it URL-safe and shorten it (e.g., 8 characters)
  const shortCode = hash.replace(/\W/g, '').slice(0, 8);

  return shortCode;
}

