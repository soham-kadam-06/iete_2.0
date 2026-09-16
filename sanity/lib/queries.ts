import { sanityClient } from "./client";

export async function getHomePage() {
  return sanityClient.fetch(`*[_type == "homePage"][0]{
    _id,
    title,
    heroTitle,
    heroSubtitle,
    heroImage,
    aboutPreviewTitle,
    aboutPreviewText,
    ctaText,
    ctaLink
  }`);
}

export async function getTeamMembers() {
  return sanityClient.fetch(`*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    position,
    department,
    year,
    photo,
    bio,
    linkedin,
    instagram,
    order
  }`);
}

export async function getEvents() {
  return sanityClient.fetch(`*[_type == "event"] | order(eventDate desc) {
    _id,
    title,
    slug,
    shortDescription,
    description,
    eventDate,
    startTime,
    endTime,
    location,
    coverImage,
    galleryImages,
    registrationLink,
    eventType,
    featured,
    status
  }`);
}

export async function getFeaturedEvents() {
  return sanityClient.fetch(`*[_type == "event" && featured == true] | order(eventDate desc) {
    _id,
    title,
    slug,
    shortDescription,
    eventDate,
    eventType
  }`);
}

export async function getGalleryAlbums() {
  return sanityClient.fetch(`*[_type == "gallery"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    coverImage,
    date,
    images
  }`);
}

export async function getAboutPage() {
  return sanityClient.fetch(`*[_type == "aboutPage"][0]{
    _id,
    title,
    heroImage,
    introduction,
    aboutIETE,
    aboutIETESFIT,
    vision,
    mission,
    images
  }`);
}

export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]{
    _id,
    websiteName,
    logo,
    favicon,
    email,
    phone,
    instagram,
    linkedin,
    youtube,
    address,
    footerText
  }`);
}
