export function convertToSlug(input: string): string {
    return input.toLowerCase().replace(/_/g, '-');
  }
  
  export function convertFromSlug(slug: string): string {
    return slug.replace(/-/g, '_');
  }