"use client";

import { useEffect } from "react";

export default function HydrationFix() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function <T extends Node>(child: T): T {
        if (child.parentNode !== this) {
          if (child.parentNode) {
            return child.parentNode.removeChild(child);
          }
          return child;
        }
        return originalRemoveChild.apply(this, [child]) as T;
      };

      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function <T extends Node>(
        newNode: T,
        referenceNode: Node | null
      ): T {
        if (referenceNode && referenceNode.parentNode !== this) {
          if (referenceNode.parentNode) {
            return referenceNode.parentNode.insertBefore(newNode, referenceNode) as T;
          }
          return this.appendChild(newNode) as T;
        }
        return originalInsertBefore.apply(this, [newNode, referenceNode]) as T;
      };
    }
  }, []);

  return null;
}
