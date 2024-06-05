import { useEffect } from 'react';

export function useKey(key, action) {
  useEffect(
    function () {
      function callbck(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
          // console.log('CLOSED');
        }
      }
      document.addEventListener('keydown', callbck);
      return function () {
        document.removeEventListener('keydown', callbck);
      };
    },
    [action, key]
  );
}
