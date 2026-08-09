export type Vec3 = [number, number, number];

export interface Mesh {
  vertices: Vec3[];
  edges: [number, number][];
  faces: [number, number, number][];
}

function normalize(v: Vec3): Vec3 {
  const len = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / len, v[1] / len, v[2] / len];
}

/**
 * Construye un icosaedro geodésico subdividido y proyectado a la esfera.
 * Frecuencia 2 → 162 nodos, 480 enlaces, 320 caras.
 */
export function buildGeodesic(subdivisions: number): Mesh {
  const t = (1 + Math.sqrt(5)) / 2;

  const vertices: Vec3[] = (
    [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
    ] as Vec3[]
  ).map(normalize);

  let faces: [number, number, number][] = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
  ];

  for (let level = 0; level < subdivisions; level++) {
    const cache = new Map<string, number>();
    const next: [number, number, number][] = [];

    const midpoint = (a: number, b: number): number => {
      const key = a < b ? `${a}_${b}` : `${b}_${a}`;
      const hit = cache.get(key);
      if (hit !== undefined) return hit;

      const va = vertices[a];
      const vb = vertices[b];
      vertices.push(
        normalize([
          (va[0] + vb[0]) / 2,
          (va[1] + vb[1]) / 2,
          (va[2] + vb[2]) / 2,
        ])
      );
      const index = vertices.length - 1;
      cache.set(key, index);
      return index;
    };

    for (const [a, b, c] of faces) {
      const ab = midpoint(a, b);
      const bc = midpoint(b, c);
      const ca = midpoint(c, a);
      next.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]);
    }
    faces = next;
  }

  const seen = new Set<string>();
  const edges: [number, number][] = [];

  for (const [a, b, c] of faces) {
    for (const [i, j] of [
      [a, b],
      [b, c],
      [c, a],
    ] as [number, number][]) {
      const key = i < j ? `${i}_${j}` : `${j}_${i}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push([i, j]);
      }
    }
  }

  return { vertices, edges, faces };
}

export function rotateY(v: Vec3, a: number): Vec3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [v[0] * c + v[2] * s, v[1], -v[0] * s + v[2] * c];
}

export function rotateX(v: Vec3, a: number): Vec3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [v[0], v[1] * c - v[2] * s, v[1] * s + v[2] * c];
}