'use client';

interface ServiceSchemaProps {
  schema: any;
}

export default function ServiceSchema({ schema }: ServiceSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
