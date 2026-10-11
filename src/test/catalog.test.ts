import { describe, expect, it } from 'vitest';
import { quotationUrl, company } from '@/lib/catalog';

describe('Quotation email', () => {
 it('keeps an English enquiry in English', () => {
  const url = quotationUrl('Example Ltd', 'test@example.com', 'Plate Flange', 'DN100, PN16, 20 units', 'en');
  const query = new URLSearchParams(url.split('?')[1]);
  expect(query.get('subject')).toBe('Plate Flange – Quote request');
  expect(query.get('body')).toContain('Name / Company: Example Ltd');
  expect(query.get('body')).toContain('Product: Plate Flange');
 });
 it('addresses the company and preserves product specifications', () => {
  const url = quotationUrl('Örnek Firma', 'test@example.com', 'Düz Flanş', 'DN100, PN16, 20 adet');
  expect(url.startsWith(`mailto:${company.email}?`)).toBe(true);
  const query = new URLSearchParams(url.split('?')[1]);
  expect(query.get('subject')).toBe('Düz Flanş – Teklif talebi');
  expect(query.get('body')).toContain('DN100, PN16, 20 adet');
  expect(query.get('body')).toContain('test@example.com');
 });
});