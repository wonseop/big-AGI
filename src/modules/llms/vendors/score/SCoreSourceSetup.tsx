import * as React from 'react';

import { Alert, Typography } from '@mui/joy';

import { FormTextField } from '~/common/components/forms/FormTextField';
import { InlineError } from '~/common/components/InlineError';
import { SetupFormRefetchButton } from '~/common/components/forms/SetupFormRefetchButton';

import { DModelSourceId } from '../../store-llms';
import { useLlmUpdateModels } from '../../llm.client.hooks';
import { useSourceSetup } from '../useSourceSetup';

import { ModelVendorSCore } from './score.vendor';


export function SCoreSourceSetup(props: { sourceId: DModelSourceId }) {

  // external state
  const { source, sourceHasLLMs, access, updateSetup } =
    useSourceSetup(props.sourceId, ModelVendorSCore);

  // derived state
  const { oaiHost } = access;

  // fetch models
  const { isFetching, refetch, isError, error } =
    useLlmUpdateModels(false/* use button only (we don't have server-side conf) */, source);

  return <>

    <FormTextField
      autoCompleteId='score-host'
      title='API Base'
      description='Excluding /v1'
      placeholder='http://127.0.0.1:5000'
      value={oaiHost}
      onChange={text => updateSetup({ oaiHost: text })}
    />

    {sourceHasLLMs && <Alert variant='soft' color='warning' sx={{ display: 'block' }}>
      성공! 
    </Alert>}

    <SetupFormRefetchButton refetch={refetch} disabled={!(oaiHost.length >= 7) || isFetching} loading={isFetching} error={isError} />

    {isError && <InlineError error={error} />}

  </>;
}
