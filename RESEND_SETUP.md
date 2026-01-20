# Check Mate Landing - Resend Email Setup

## Setup Instructions

### 1. Install Dependencies
```bash
yarn install
```

### 2. Get Your Resend API Key
1. Go to [Resend.com](https://resend.com)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### 3. Configure Environment Variables
1. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

2. Open `.env` and add your Resend API key:
```
VITE_RESEND_API_KEY=re_your_actual_api_key_here
```

### 4. Verify Your Domain (Important!)
1. In your Resend dashboard, go to Domains
2. Add your domain (e.g., checkmate.ae)
3. Follow the DNS verification steps
4. Once verified, update the `from` email in `/src/lib/resend.ts`:
```typescript
from: 'Check Mate Events <noreply@checkmate.ae>', // Use your verified domain
```

### 5. Test the Integration
1. Run the development server:
```bash
yarn dev
```

2. Click on the "Event" button in the Services section
3. Fill out and submit the form
4. Check that emails are received at:
   - Ahmed@checkmate.ae
   - contact@checkmate.ae

## Current Email Recipients
The form submissions are sent to:
- Ahmed@checkmate.ae
- contact@checkmate.ae

To change recipients, update the `to` array in `/src/lib/resend.ts`.

## Notes
- Make sure `.env` is in your `.gitignore` to keep your API key secure
- The API key should start with `re_`
- For production, consider using environment variables in your hosting platform
