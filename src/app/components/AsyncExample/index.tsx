import React from 'react';

/**
 * Component with async request example. Uses:
 * - Redux Toolkit Query
 * - Redux Toolkit Slice (for query arguments store)
 */
export const AsyncExample: React.FC = () => {
    const d = 33;

    return <>123</>;
    // const queryArgs = useAppSelector((state) => state.entity.queryArgs);
    // const entityListState = useGetEntityListQuery(queryArgs);
    // const dispatch = useAppDispatch();
    // const handleSearchChange = (value: string | undefined) => {
    //     dispatch(entitySlice.actions.setSearch(value || undefined));
    // };
    // const handlePageChange = (value: number) => {
    //     dispatch(entitySlice.actions.setPage(value));
    // };
    //
    // return (
    //     <Container title="Async data example" withBackLink>
    //         {entityListState.isLoading && !entityListState.data && <div>Loading entities</div>}
    //         {entityListState.isSuccess && (
    //             <>
    //                 <Search
    //                     onChange={handleSearchChange}
    //                     value={queryArgs.search}
    //                     pending={entityListState.isFetching}
    //                 />
    //                 <EntitiesList entities={entityListState.data.data} pending={entityListState.isFetching} />
    //                 <div>
    //                     {/* {Array(entityListState.data.totalPages) */}
    //                     {/*    .fill(0) */}
    //                     {/*    .map((v, i) => { */}
    //                     {/*        const page = i + 1; */}
    //                     {/*        return ( */}
    //                     {/*            <button */}
    //                     {/*                type="button" */}
    //                     {/*                key={page} */}
    //                     {/*                className={classNames( */}
    //                     {/*                    Styles.paginationItem, */}
    //                     {/*                    page === queryArgs.page && Styles.paginationItemActive, */}
    //                     {/*                )} */}
    //                     {/*                onClick={() => handlePageChange(page)} */}
    //                     {/*            > */}
    //                     {/*                {page} */}
    //                     {/*            </button> */}
    //                     {/*        ); */}
    //                     {/*    })} */}
    //                 </div>
    //             </>
    //         )}
    //     </Container>
    // );
};
