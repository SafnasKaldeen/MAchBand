import { NextResponse } from 'next/server';

export async function GET() {
  const placeId = 'YOUR_GOOGLE_PLACE_ID'; // Get from Google Places
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    );
    
    const data = await response.json();
    
    return NextResponse.json({
      reviews: data.result?.reviews || [],
      rating: data.result?.rating,
      total: data.result?.user_ratings_total
    });
  } catch (error) {
    return NextResponse.json({ reviews: [] }, { status: 500 });
  }
}