import { defineAsyncComponent } from "vue";

export function useButtons() {
  const KatalogBtn = defineAsyncComponent(
    () => import("../components/UI/Buttons/KonsultBtn.vue")
  );
  const KatalogBigBtn = defineAsyncComponent(
    () => import("../components/UI/Buttons/KonsultBtn_Big.vue")
  );
  const FindProgBtn = defineAsyncComponent(
    () => import("../components/UI/Buttons/findProgBtn.vue")
  );
  const inputInHeader = defineAsyncComponent(
    () => import("../components/UI/inputs/inputInHeader.vue")
  );

  return {
    KatalogBtn,
    KatalogBigBtn,
    FindProgBtn,
    inputInHeader,
  };
}

export function useSlider(
  propRef: any,
  paramSlideCount: number,
  paramSlideWidth: number,
  paramSlidePadding: number = 24
) {
  let coordsX: number[] = [0, 285 + 24, 570 + 48, 855 + 72];
  let leftPosStr: string = "px";
  let coordsIndex: number = 0;
  let stoped: boolean = false;

  function initCoords() {
    let initX: number = 0;
    let paddingX = paramSlidePadding;
    coordsX = [];
    for (let i: number = 0; i < paramSlideCount; i++) {
      coordsX.push(initX);
      initX = initX + paramSlideWidth + paddingX;
    }
  }

  initCoords();

  const moveSlide = () => {
    // console.log(stoped.value, valAdd.value, leftPosStr.value);
    leftPosStr = String(-coordsX[coordsIndex]) + "px";
    if (propRef.value) {
      // divRef.value.style.left = leftPosStr.value;
      stoped
        ? (propRef.value.style.transition = "")
        : (propRef.value.style.transition = "all 0.35s ease 0.15s");
      propRef.value.style.transform = `translateX(${leftPosStr})`;
    }
    // console.log(leftPosStr, coordsIndex, stoped);
  };

  const moveRight = (event: MouseEvent) => {
    event.preventDefault();
    if (coordsIndex < coordsX.length - 1) {
      stoped = false;
      coordsIndex++;
    } else {
      coordsIndex = 0;
      stoped = true;
    }
    moveSlide();
    // console.log(leftPosStr.value, valAdd.value);
  };

  const moveLeft = (event: MouseEvent) => {
    event.preventDefault();
    if (coordsIndex > 0) {
      stoped = false;
      coordsIndex--;
    } else {
      coordsIndex = coordsX.length - 1;
      stoped = true;
    }
    moveSlide();
    // console.log(leftPosStr.value, valAdd.value);
  };

  const checkRef = () => {
    console.log(propRef.value);
  };
  return {
    checkRef,
    moveRight,
    moveLeft,
  };
}
